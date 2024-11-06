import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');

const result = readFile('result.txt');

test('generateDifference', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
  expect(genDiff('file1.yml', 'file2.yaml')).toEqual(result);
  expect(() => genDiff('file1.json', 'file2.json', 'js')).toThrow('Unknown format js');
  expect(() => genDiff('file1.js', 'file2.json')).toThrow('Unknown format: js');
});
