#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();
program
  .version('12.0.0')
  .description('The command joins two lines into one')
  .option('-f, --format [type]', 'output format (default "stylish")')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format));
  });
program.parse();
