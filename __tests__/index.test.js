import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');

const stylishResult = readFile('stylishResult.txt');
const plainResult = readFile('plainResult.txt');
const jsonResult = readFile('jsonResult.txt');

test('generateDifference', () => {
  expect(genDiff('file1.json', 'file2.yaml')).toEqual(stylishResult);
  expect(genDiff('file1.yml', 'file2.json')).toEqual(stylishResult);
  expect(genDiff('file1.json', 'file2.json', 'plain')).toEqual(plainResult);
  expect(genDiff('file1.yml', 'file2.yaml', 'json')).toEqual(jsonResult);

  expect(() => genDiff('file1.json', 'file2.json', 'js')).toThrow('Unknown format js');
  expect(() => genDiff('file1.js', 'file2.json')).toThrow('Unknown format: js');
});
