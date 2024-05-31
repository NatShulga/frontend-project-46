/* eslint no-underscore-dangle: 0 */
import path from 'path';

const dataFromFile = (file) => {
  const extname = path.extname(file).slice(1);
  const read = readFile(file);
  return parse(read, extname);
};

const genDiff = (file1, file2, format = 'stylish') => {
  const data1 = dataFromFile(file1);
  const data2 = dataFromFile(file2);
  const diffTree = getDiffTree(data1, data2);
  return getFormat(diffTree, format);
};

export default genDiff;
