import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';
import stringify from '../src/toString.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');

const result = stringify(JSON.parse(readFile('expected_file.json')));

test('generateDifference', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
});

test('comparison of two formats', () => {
  expect(genDiff('file1.json', 'file2.json') === genDiff('file1.yml', 'file2.yml')).toBeTruthy();
  expect(genDiff('file1.json', 'file1.yml') === genDiff('file1.yml', 'file2.json')).not.toBeTruthy();
});
