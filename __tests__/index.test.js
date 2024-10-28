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
