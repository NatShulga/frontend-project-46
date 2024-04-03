#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .version('12.0.0', '-V, --version', 'output the version number')
  .description('Команда соединяет две строки в одну')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-h, --help', 'output usage information');
program.parse(process.argv);

