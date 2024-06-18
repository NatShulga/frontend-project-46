import { describe, expect, test } from '@jest/globals';
import readFile from '../src/utils.js';
import gendiff from '../src/index.js';

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
