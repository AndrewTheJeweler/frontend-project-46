import fs from 'fs';
import path from 'path';
import process from 'process';
import toParse from './parser.js';
import buildTree from './buildObject.js';
import formatting from './formats/index.js';

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), '__fixtures__', filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');
const getFormat = (filePath) => filePath.split('.').splice(1).join();

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const file1Obj = toParse(readFile(filePath1), getFormat(filePath1));
  const file2Obj = toParse(readFile(filePath2), getFormat(filePath2));
  const result = buildTree(file1Obj, file2Obj);
  return formatting(result, format);
};

export default genDiff;
