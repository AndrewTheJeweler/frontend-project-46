#!/usr/bin/env node
import { program } from 'commander';

program
  .version('0.1.0')
	.option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
	.description('Compares two configuration files and shows a difference.')
	.action((filepath1, filepath2, options) => {
		console.log(filepath1, filepath2, options.format)
	})
	
program.parse();