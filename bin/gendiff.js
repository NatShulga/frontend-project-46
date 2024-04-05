#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();
program
  .version('12.0.0')
  .description('The command joins two lines into one')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, { format }) => {
    console.log(genDiff(filepath1, filepath2, format));
  });
program.parse();

