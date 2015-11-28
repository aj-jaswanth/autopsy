#!/usr/bin/env node
var spawn = require('child_process').spawn
var port = 8080
var tunnel = ['-R', port + ':127.0.0.1:' + port]

module.exports = function sshCmd(args) {
  spawn('ssh', tunnel.concat(args), {stdio: 'inherit'})  
}

if (!module.parent) { module.exports(process.argv.slice(2)) }