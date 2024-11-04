import _ from 'lodash';

const genIndent = (depth, replacer = ' ', spaceCount = 4) => replacer.repeat((spaceCount * depth) - 2);

const stringify = (data, depth = 1) => {
  if (!_.isObject(data)) {
    return data;
  }

  const keys = Object.keys(data);
  const result = keys.map((key) => `${genIndent(depth + 1)}  ${key}: ${stringify(data[key], depth + 1)}`);
  return `{\n${result.join('\n')}\n  ${genIndent(depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth = 1) => {
    const result = node.map((item) => {
      switch (item.type) {
        case 'nested': {
          return `${genIndent(depth)}  ${item.key}: {\n${iter(item.children, depth + 1)}\n${genIndent(depth)}  }`;
        }
        case 'deleted':
          return `${genIndent(depth)}- ${item.key}: ${stringify(item.value, depth)}`;
        case 'added':
          return `${genIndent(depth)}+ ${item.key}: ${stringify(item.value, depth)}`;
        case 'changed':
          return `${genIndent(depth)}- ${item.key}: ${stringify(item.value1, depth)}\n${genIndent(depth)}+ ${item.key}: ${stringify(item.value2, depth)}`;
        case 'unchanged':
          return `${genIndent(depth)}  ${item.key}: ${stringify(item.value, depth)}`;
        default:
          throw new Error('');
      }
    });
    return result.join('\n');
  };

  return `{\n${iter(data)}\n}`;
};

export default stylish;
