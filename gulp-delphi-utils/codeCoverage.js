var cp = require("child_process"),
    gutil = require("gulp-util"),
    path = require('path');

function codeCoverage(applicationName, sourceDirectory, sourceUnit, rootDirectory) {
    var bb = cp.spawnSync(path.join(rootDirectory, 'coverage\\CodeCoverage.exe'), [
        "-e",  path.join(rootDirectory, "Bin", applicationName + ".exe"), 
        "-m",  path.join(rootDirectory, "Bin", applicationName + ".map"),
        "-sd", path.join(rootDirectory, sourceDirectory),
        "-u", sourceUnit,
        "-html", "-emma", "-xml", 
        "-od", path.join(rootDirectory, "Bin", "Coverage")   
        ]);
    gutil.log(bb.output.toString());    
    return bb.output.toString();
}

/*
  var codeCoverage = require("./codeCoverage");
  codeCoverage("Project1Tests", "src", "uCalculadora.pas");
*/

module.exports = codeCoverage;