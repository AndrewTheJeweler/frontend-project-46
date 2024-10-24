import toParse from '../src/parser';
import fs from 'fs';
import process from 'process';
import path from 'path';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');
const file1 = readFile('__fixtures__/file1.json');
const getFormat = (filepath) => filepath.split('.').splice(1).join();
const err = 'Unknown format: undefined';
const fileFormat = getFormat('__fixtures__/file1.json');


test('parser', () => {
	expect(toParse(file1, fileFormat)).toEqual(JSON.parse(file1));
	expect(() => toParse()).toThrow(err);
});