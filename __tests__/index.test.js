import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import readFile from '../src/utils.js';
import gendiff from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) =>
  path.resolve(__dirname, "..", "__fixtures__", filename);

const readFile = (filename) => {
  const filePath = getFixturePath(filename);
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, "utf-8");
  } else {
    throw new Error(`File "${filename}" not found.`);
  }
};

const stylish = readFile("stylishFormatTest.txt");
const plain = readFile("plainData.txt");
const json = readFile("jsonData.txt");

describe("testing all formates", () => {
  it("default format", () => {
    expect(
      gendiff(
        getFixturePath("file1.json"),
        getFixturePath("file2.yml"),
        "stylish"
      )
    ).toStrictEqual(stylish);
  });
  it("stylish format, json files", () => {
    expect(
      gendiff(
        getFixturePath("file1.json"),
        getFixturePath("file2.json")
      ).toStrictEqual(stylish)
    );
  });
  it("stylish format, yaml files, json files", () => {
    expect(
      gendiff(
        getFixturePath("file1.yml"),
        getFixturePath("file2.yml")
      ).toStrictEqual(stylish)
    );
  });
  it("plain format, json files", () => {
    expect(
      gendiff(
        getFixturePath("file1.json"),
        getFixturePath("file2.json"),
        "plain"
      )
    ).toStrictEqual(plain);
  });
  it("plain format, yaml files", () => {
    expect(
      gendiff(getFixturePath("file1.yml"), getFixturePath("file2.yml"), "plain")
    ).toStrictEqual(plain);
  });
  it("json format, json files", () => {
    expect(
      gendiff(
        getFixturePath("file1.json"),
        getFixturePath("file2.json"),
        "json"
      )
    ).toStrictEqual(json);
  });
  it("json format, yaml files", () => {
    expect(
      gendiff(getFixturePath("file1.yml"), getFixturePath("file2.yml"), "json")
    ).toStrictEqual(json);
  });
});
