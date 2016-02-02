#! /usr/bin/env node
'use strict'
require('babel-register')(require('../babel/presets'))

let cwd = process.cwd()

let routes = require(`${cwd}/routes`).default
let routeList = routes.map(route => route.component)
let compiler = require('../webpack/build.js').default
compiler(cwd, routeList)