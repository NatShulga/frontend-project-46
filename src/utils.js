import fs from 'fs';
import path from 'path';

const getPath = (filename) => path.resolve(filename);
const readFile = (filename) => fs.readFileSync(getPath(filename), 'utf-8');

export default readFile;
