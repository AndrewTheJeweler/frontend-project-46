#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .version('0.1.0')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  });

program.parse();
