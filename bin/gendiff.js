#!/usr/bin/env node

import { program } from 'commander';

program
	.name('gendiff.js')
	.description('Compares two configuration files and shows a difference.')
	.version('0.1.0');

program.parse();