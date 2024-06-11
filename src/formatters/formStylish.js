import _ from 'lodash';

const spacesCount = 4;
const indent = (depth) => ' '.repeat(depth * spacesCount - 2);

const stringify = (data, depth = 1) => {
  if (!_.isObject(data)) {
    return `${data}`;
  }
  const keys = Object.entries(data);
  const strings = keys.map(([key, value]) => {
    const checkedValue = stringify(value, depth + 1);
    return `${indent(depth + 1)}  ${key}: ${checkedValue}`;
  });
  return `{\n${strings.join('\n')}\n  ${indent(depth)}}`;
};

const getFormatStylish = (diffTree) => {
  const iter = (tree, depth = 1) => tree.map((node) => { 
    const createStrWithSing = (value, sign) => `${indent(depth)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
      switch (node.type) {
        case 'added':
          return createStrWithSing(node.value, '+');
        case 'removed':
          return createStrWithSing(node.value, '-');
        case 'unchanged':
          return createStrWithSing(node.value, ' ');
        case 'changed':
          return `${createStrWithSing(node.value1, '-')}${createStrWithSing(node.value2, '+')}`;
        case 'nested':
          return `${indent(depth)}  ${node.key}: {\n${iter(node.children, depth + 1).join('')}${indent(depth)}  }\n`;
        default:
          throw new Error(`This type doesn't exist: ${node.type}`);
      }
    });
  return `{\n${iter(diffTree).join('')}}`;
};

export default getFormatStylish;
