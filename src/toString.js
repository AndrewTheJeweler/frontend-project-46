import _ from 'lodash';

const stringify = (object, replacer = '.', spaceCount = 4) => {
  const iter = (data, depth) => {
    if (!_.isObject(data)) {
      return `${data}`;
    }

    const lines = Object.entries(data).map(([key, value]) => {
      const preparedValue = iter(value, depth + 1);
      const space = replacer.repeat((depth * spaceCount) - 2);
      return `${space}${key}: ${preparedValue}`;
    });
    const outSpace = replacer.repeat((depth * spaceCount) - spaceCount);
    const result = ['{', ...lines, `${outSpace}}`].join('\n');
    return result;
  };

  return iter(object, 1);
};

export default stringify;
