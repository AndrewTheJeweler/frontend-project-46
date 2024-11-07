import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (data) => {
  const iter = (node, key) => {
    const result = node.map((item) => {
      const newKeys = [...key, item.key];
      switch (item.type) {
        case 'nested':
          return iter(item.children, newKeys);
        case 'deleted':
          return `Property '${newKeys.join('.')}' was removed`;
        case 'added':
          return `Property '${newKeys.join('.')}' was added with value: ${stringify(item.value)}`;
        case 'changed':
          return `Property '${newKeys.join('.')}' was updated. From ${stringify(item.value1)} to ${stringify(item.value2)}`;
        case 'unchanged':
          return 'unchanged';
        default:
          throw new Error(`Unknown type: ${item.type}`);
      }
    });
    return result.filter((line) => line !== 'unchanged').join('\n');
  };

  return iter(data, []);
};

export default plain;
