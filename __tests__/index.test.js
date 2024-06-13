import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import readFile from '../src/utils.js';
import gendiff from '../src/index.js';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

let stylish, plain, json;

beforeAll(() => {
  stylish = fs.readFileSync(getFixturePath('stylishFormatTest.txt'), 'utf-8');
  plain = fs.readFileSync(getFixturePath('plainData.txt'), 'utf-8');
  json = fs.readFileSync(getFixturePath('jsonData.txt'), 'utf-8');
});

describe('check output', () => {
  const testData = [
    ['file1.json', 'file2.json', 'stylishFormatTest.txt'],
    ['file1.yaml', 'file2.yaml', 'stylishFormatTest.txt', 'stylish'],
    ['file1.json', 'file2.yaml', 'plainData.txt', 'plain'],
    ['file1.yaml', 'file2.json', 'jsonData.txt', 'json'],
  ];
  test.each(testData)(
    'formatters work',
    (file1, file2, expectedFile, format = 'stylish') => {
      const result = gendiff(file1, file2, format);
      const expected = readFile(expectedFile);
      expect(result).toEqual(expected);
    },
  );
});
