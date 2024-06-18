import { describe, expect, test } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import readFile from '../src/utils.js';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

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
      const result = gendiff(getFixturePath(file1), getFixturePath(file2), format);
      const expected = readFile(getFixturePath(expectedFile));
      expect(result).toEqual(expected);
    },
  );
});
