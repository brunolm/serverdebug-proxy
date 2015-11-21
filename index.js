#!/usr/bin/env node

var httpProxy = require('http-proxy');

var args = process.argv.slice(2);
console.log(args);
try {
  var spawn = require('child_process').spawn;
  var server = spawn(args[0], args.slice(1));

  server.stdout.on('data', function (data) {
    console.log('stdout: ' + data);
  });
  
  server.stderr.on('data', function (data) {
    console.log('stderr: ' + data);
  });
  
  server.on('close', function (code) {
    console.log('child process exited with code ' + code);
  });
}
catch (ex) {
  console.log('command-proxy child:');
  console.log(ex);
}

httpProxy.createProxyServer({ target:'http://localhost:5858' }).listen(8585);