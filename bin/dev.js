#! /usr/bin/env node
'use strict'
require('babel-register')(require('../babel/presets'))

let cwd = process.cwd()
let compiler = require('../webpack/build.js').default
let server = require('../webpack/server.js').default
compiler(cwd, server)