import { describe, expect, test } from '@jest/globals';
import readFile from '../src/utils.js';
import genDiff from '../src/index.js';

describe('check output', () => {
  const testFormats = [
    ['file1.json', 'file2.json', 'stylishFormatTest.txt'],
    ['file1.yaml', 'file2.yaml', 'stylishFormatTest.txt', 'stylish'],
    ['file1.json', 'file2.yaml', 'plainFormatTest.txt', 'plain'],
    ['file1.yaml', 'file2.json', 'jsonFormatTest.txt', 'json'],
  ];
  test.each(testFormats)(
    'formatters work',
    (file1, file2, expectedFile, format = 'stylish') => {
      const result = genDiff(file1, file2, format);
      const expected = readFile(expectedFile);
      expect(result).toEqual(expected);
    },
  );
});
