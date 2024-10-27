import fs from 'fs';
import path from 'path';
import process from 'process';
import toParse from '../src/parser.js';
import stringify from '../src/toString.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');

const object1 = toParse(readFile('__fixtures__/file1.json'), 'json');
const result = `{
 host: hexlet.io
 timeout: 50
 proxy: 123.234.53.22
 follow: false
}`;

test('toString', () => {
  expect(stringify(object1)).toEqual(result);
});
