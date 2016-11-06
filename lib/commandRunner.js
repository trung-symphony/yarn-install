var which = require('which'),
    childProcess = require('child_process');

exports.run = function run (command, cb) {
  which(command.cmd, function(err, cmdpath){
    if (err) {
      cb(new Error('Can\'t install! `' + command.cmd + '` doesn\'t seem to be installed.'));
      return;
    }
    var cmd = childProcess.spawnSync(cmdpath, command.args, {stdio: 'inherit', cwd: command.cwd || process.cwd()});
    cb();
  });
};
