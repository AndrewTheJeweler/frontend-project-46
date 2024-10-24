import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url'

const getAbsolutePath = (filePath) => path.resolve(process.cwd(), filePath);
const readFile = (filePath) => fs.readFileSync(getAbsolutePath(filePath), 'utf-8');
const getFormat = (filepath) => filepath.split('.').splice(1).join();

const genDiff = (filepath1, filepath2, format = 'stylish') => {
	const file1 = readFile(filepath1);
	const file2 = readFile(filepath2);


}

export default genDiff;