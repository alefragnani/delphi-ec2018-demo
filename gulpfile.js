// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util'),
    zip = require('gulp-zip'),
    runSequence = require('run-sequence'),
    path = require('path'),
    fs = require('fs'),
    cp = require('child_process'),
    pp = require('process');

// This will run in this order: 
// * create-folders
// * compile the main project
// * compile the tests
// * run the tests
// * coverage
// * zip 
// * Finally call the callback function 
gulp.task('build', function(callback) {
  runSequence('create-folders',
              'compile',
              'compile-tests',
              'unit-test',
              'code-coverage',
              'zip',
              callback);
});

// the default task is.....
gulp.task('default', ["create-folders"]);

// create additional folders, used by the building process
gulp.task("create-folders", function() {
  gutil.log('create-folders:started');
  if (!fs.existsSync(path.join(__dirname, 'Artifacts'))) {
    fs.mkdirSync(path.join(__dirname, 'Artifacts'));
  }
  if (!fs.existsSync(path.join(__dirname, 'Bin'))) {
    fs.mkdirSync(path.join(__dirname, 'Bin'));
  }
  if (!fs.existsSync(path.join(__dirname, 'Bin\\Coverage'))) {
    fs.mkdirSync(path.join(__dirname, 'Bin\\Coverage'));
  }
  if (!fs.existsSync(path.join(__dirname, 'Lib'))) {
    fs.mkdirSync(path.join(__dirname, 'Lib'));
  }
  return gutil.log('create-folders:ended');
});

// function create_dcc_bat(projectName, folderName, unitSources, conditionalDefines) {
//   var dcccomand = "DCC32.EXE " + projectName + " -B -E..\\Bin -NU..\\Lib -GD ";
//   // var dcccomand = "DCC32.EXE " + projectName + " -B -E..\\Bin -NU..\\Lib -U..\\Lib -GD ";

//   dcccomand = conditionalDefines ? dcccomand + " -D" + conditionalDefines : dcccomand;
//   dcccomand = unitSources ? dcccomand + " -U..\\Lib;" + unitSources : dcccomand + "-U..\\Lib";  
  
//   fs.writeFileSync(path.join(__dirname, folderName, 'dccX.bat'), dcccomand);
// }

function dccHasError(output) {
  gutil.log("dccHasError: output - " + output);
  gutil.log("dccHasError: output length - " + output.length);
  // for  (var index = 0; index < output.length; index++) {
  //   var currentLine = output[index];
  //   gutil.log("currentLine: " + currentLine);
    var re = RegExp(/.*(Fatal|Error).*/);
    var matches = re.exec(output);
    if (matches) {
      gutil.log("acho erro:" + matches[1]);
      return true;
    } else {
      return false;
    }
  // }
}

// compile the main project
gulp.task("compile", ["create-folders"], function() {
  // gutil.log('compile-entrando-chdir');
  // gutil.log(__dirname);
  pp.chdir(path.join(__dirname, "src"));
  // gutil.log('compile-entrando-spawn');
  // create_dcc_bat('Project1.dpr', 'src');
  // var bb = cp.spawnSync(path.join(__dirname, 'src\\dccX.bat'));
  var bb = cp.spawnSync("dcc32", ["-B", "Project1.dpr", "-E..\\Bin", "-nu..\\Lib", "-GD"]);
  gutil.log(bb.output.toString());
  if (dccHasError(bb.output.toString())) {
    gutil.log("achoooou");
    process.exit(1);
  }
  // gutil.log("process.env -- ");
  // gutil.log(process.env);
  
  // var bb = cp.spawn("dcc32", ["-B", "Project1.dpr", "-E..\\Bin", "-nu..\\Lib", "-GD"]);

  // bb.stdout.on('data', (data) => {
  //   console.log(`stdout: ${data}`);
  // });
  
  // bb.stderr.on('data', (data) => {
  //   console.log(`stderr: ${data}`);
  // });
  
  // bb.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // });

  // return gutil.log('COMPILE exit');
});

// compile the test project
gulp.task("compile-tests", ["compile"], function() {
  // gutil.log('compile-tests-entrando-chdir');
  // gutil.log(__dirname);
  pp.chdir(path.join(__dirname, "tests"));
  // gutil.log('compile-tests-entrando-spawn');
  // create_dcc_bat('Project1Tests.dpr', 'tests', 'C:\\Users\\alefr\\Documents\\GitHub\\_forks\\DUnitX', 'CI');
  // var bb = cp.spawnSync(path.join(__dirname, 'tests\\dccX.bat'));
  var bb = cp.spawnSync("dcc32", ["-B", "Project1Tests.dpr", 
    "-E..\\Bin", "-NU..\\Lib", "-U..\\Lib;C:\\Users\\alefr\\Documents\\GitHub\\_forks\\DUnitX", 
    "-GD", "-DCI"]);
  gutil.log(bb.output.toString());
  // return gutil.log('COMPILE-TESTS exit');
});

// run unit tests
gulp.task("unit-test", ["compile-tests"], function() {
  // gutil.log('unit-test');
  // gutil.log(__dirname);
  pp.chdir(path.join(__dirname, "Bin"));
  // gutil.log('unit-test-spawn');
  var bb = cp.spawnSync(path.join(__dirname, 'Bin\\Project1Tests.exe'));
  gutil.log(bb.output.toString());
  // return gutil.log('UNIT-TEST exit');
});

// function create_cc_bat(projectName, unitName) {
//   var ccexe = path.join(__dirname, "Coverage\\CodeCoverage.exe")
//   var cccomand = path.join(__dirname, "Coverage\\CodeCoverage.exe") + " -e " + path.join(__dirname, "Bin",  projectName + ".exe") + " -m " + path.join(__dirname, "Bin", projectName + ".map") + " -sd " + path.join(__dirname, "src") + " -u " + unitName + " -html -emma -xml -od " + path.join(__dirname, "Bin", "Coverage");
//   fs.writeFileSync(path.join(__dirname, 'Coverage\\ccX.bat'), cccomand);
// }

// run code coverage
gulp.task("code-coverage", function() {
  // gutil.log('code-coverage');
  // gutil.log(__dirname);
  // pp.chdir(path.join(__dirname, "Bin"));
  // gutil.log('code-coverage-spawn');
  // create_cc_bat('Project1Tests', 'uCalculadora.pas');
  // var bb = cp.spawnSync(path.join(__dirname, 'Coverage\\ccX.bat'));

  var bb = cp.spawnSync(path.join(__dirname, 'Coverage\\CodeCoverage.exe'), [
    "-e",  path.join(__dirname, "Bin", "Project1Tests.exe"), 
    "-m",  path.join(__dirname, "Bin", "Project1Tests.map"),
    "-sd", path.join(__dirname, "src"),
    "-u", "uCalculadora.pas",
    "-html", "-emma", "-xml", 
    "-od", path.join(__dirname, "Bin", "Coverage")   
    ]);

  gutil.log(bb.output.toString());
  // return gutil.log('code-coverage exit');
});


// zip the artifacts
gulp.task("zip", function() {
  return gulp.src('./Bin/**')
    .pipe(zip('Build.zip'))
    .pipe(gulp.dest('./Artifacts'));

  // return gutil.log('ZIP');
});

// watch
gulp.task("watch", function() {
  gulp.watch("src/*.pas", ["compile"]);
  gulp.watch("tests/*.pas", ["unit-test"]);
  // gulp.watch("Artifacts/*.*", ["zip"]);
});
