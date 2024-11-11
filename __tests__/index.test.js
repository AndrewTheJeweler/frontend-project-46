import fs from 'fs';
import path from 'path';
import process from 'process';
import genDiff from '../src/index.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');

const stylishResult = readFile('stylishResult.txt');
const plainResult = readFile('plainResult.txt');
const jsonResult = readFile('jsonResult.txt');

test.each([
  ['file1.json', 'file2.json', 'stylish', stylishResult],
  ['file1.yml', 'file2.yaml', 'stylish', stylishResult],
  ['file1.json', 'file2.json', 'plain', plainResult],
  ['file1.yml', 'file2.yaml', 'plain', plainResult],
  ['file1.json', 'file2.json', 'json', jsonResult],
  ['file1.yml', 'file2.yaml', 'json', jsonResult],
])('genDiff(%p, %p, %p)', (path1, path2, styleName, expected) => {
  expect(genDiff(path1, path2, styleName)).toEqual(expected);
});
