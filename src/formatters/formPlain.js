import _ from 'lodash';

const checkedValue = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  } if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const getFormPlain = (diffTree) => {
  const iter = (tree, before = '') => {
    const plain = tree
      .filter((status) => status.type !== 'unchanged')
      .map((node) => {
        const current = `${before}${node.key}`;
        switch (node.type) {
          case 'added':
            return `Property '${current}' was added with value: ${checkedValue(node.value)}`;
          case 'removed':
            return `Property '${current}' was removed`;
          case 'changed':
            return `Property '${current}' was updated. From ${checkedValue(node.value1)} to ${checkedValue(node.value2)}`;
          case 'nested':
            return iter(node.children, `${current}.`);
          default:
            throw new Error(`This type doesn't exist: ${node.type}`);
        }
      });
    return plain.join('\n');
  };
  return iter(diffTree);
};
export default getFormPlain;