/* eslint no-underscore-dangle: 0 */
import path from 'path';
import parse from './parsers.js';
import readFile from './utils.js';
import buildDiffTree from './buildDiffTree.js';
import getFormat from './formatters/index.js';

const dataFromFile = (file) => {
  const extname = path.extname(file).slice(1);
  const read = readFile(file);
  return parse(read, extname);
};

const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = dataFromFile(file1);
  const data2 = dataFromFile(file2);
  const diffTree = buildDiffTree(data1, data2);
  return getFormat(diffTree, format);
};

export default genDiff;
