/* eslint no-underscore-dangle: 0 */
import { fileURLToPath } from 'url';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);

const getPath = (filename) => path.resolve(filename);
const readFile = (filename) => fs.readFileSync(getPath(filename), 'utf-8');

export default readFile;
