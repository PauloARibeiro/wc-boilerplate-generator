#!/usr/bin/env node

const program = require('commander')
const createComponent = require('./createComponent')
const start = require('./watcher')

program.version('0.0.1')

program
  .command('generate <name>')
  .alias('g')
  .description('Generate component')
  .action(name => createComponent(name))

program
  .command('start')
  .alias('s')
  .description('watch for changes')
  .action(() => start())

program.parse(process.argv)
