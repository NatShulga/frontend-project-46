import yaml from 'js-yaml';

const parsers = {
  json: (content) => JSON.parse(content),
  yml: (content) => yaml.load(content),
  yaml: (content) => yaml.load(content),
};
const parse = (content, extname) => {
  const parser = parsers[extname];
  if (!parser) {
    throw new Error(`Error: "${extname}" - this extname is not supported`);
  }
  return parser(content);
};

export default parse;
