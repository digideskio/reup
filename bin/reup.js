#! /usr/bin/env node
var command = process.argv[2]
if(command == 'dev') return require('./dev.js')