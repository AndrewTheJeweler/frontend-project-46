import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import process from 'process';
import toParse from './parser.js';
import buildTree from './buildObject.js';
import formatting from './formatters/index.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');
const getFormat = (filePath) => _.last(filePath.split('.'));

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const data1 = toParse(readFile(filePath1), getFormat(filePath1));
  const data2 = toParse(readFile(filePath2), getFormat(filePath2));
  const result = buildTree(data1, data2);
  return formatting(result, format);
};

export default genDiff;
