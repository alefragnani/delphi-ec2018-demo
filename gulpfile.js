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

function dccHasError(output) {
  // gutil.log("dccHasError: output - " + output);
  // gutil.log("dccHasError: output length - " + output.length);
  var re = RegExp(/.*(Fatal|Error):.*/);
  var matches = re.exec(output);
  if (matches) {
    // gutil.log("acho erro:" + matches[1]);
    return true;
  } else {
    return false;
  }
}

// compile the main project
gulp.task("compile", ["create-folders"], function() {
  pp.chdir(path.join(__dirname, "src"));
  var bb = cp.spawnSync("dcc32", ["-B", "Project1.dpr", "-E..\\Bin", "-nu..\\Lib", "-GD"]);
  gutil.log(bb.output.toString());
  if (dccHasError(bb.output.toString())) {
    // process.exit(1);
    throw Error("Task: compile-tests");
  }
});

// compile the test project
gulp.task("compile-tests", ["compile"], function() {
  pp.chdir(path.join(__dirname, "tests"));
  var bb = cp.spawnSync("dcc32", ["-B", "Project1Tests.dpr", 
    "-E..\\Bin", "-NU..\\Lib", "-U..\\Lib;C:\\Users\\alefr\\Documents\\GitHub\\_forks\\DUnitX", 
    "-GD", "-DCI"]);
  gutil.log(bb.output.toString());
  if (dccHasError(bb.output.toString())) {
     //process.exit(1);
    throw Error("Task: compile-tests");
  }
});

// run unit tests
gulp.task("unit-test", ["compile-tests"], function() {
  pp.chdir(path.join(__dirname, "Bin"));
  var bb = cp.spawnSync(path.join(__dirname, 'Bin\\Project1Tests.exe'));
  gutil.log(bb.output.toString());
});

// run code coverage
gulp.task("code-coverage", function() {

  var bb = cp.spawnSync(path.join(__dirname, 'Coverage\\CodeCoverage.exe'), [
    "-e",  path.join(__dirname, "Bin", "Project1Tests.exe"), 
    "-m",  path.join(__dirname, "Bin", "Project1Tests.map"),
    "-sd", path.join(__dirname, "src"),
    "-u", "uCalculadora.pas",
    "-html", "-emma", "-xml", 
    "-od", path.join(__dirname, "Bin", "Coverage")   
    ]);
  gutil.log(bb.output.toString());
});


// zip the artifacts
gulp.task("zip", function() {
  return gulp.src('./Bin/**')
    .pipe(zip('Build.zip'))
    .pipe(gulp.dest('./Artifacts'));
});

// watch
gulp.task("watch", function() {
  gulp.watch("src/*.pas", ["compile"]);
  gulp.watch("tests/*.pas", ["unit-test"]);
  // gulp.watch("Artifacts/*.*", ["zip"]);
});
