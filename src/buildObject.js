import _ from 'lodash';

const buildObject = (object1, object2) => {
  const iter = (data1, data2) => {
    const result = {};
    const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

    keys.forEach((key) => {
      const value1 = data1[key];
      const value2 = data2[key];

      if (_.isObject(value1) && _.isObject(value2)) {
        result[`  ${key}`] = iter(value1, value2);
      } else if (value1 !== value2) {
        if (!Object.hasOwn(data1, key)) {
          result[`+ ${key}`] = value2;
        } else if (!Object.hasOwn(data2, key)) {
          result[`- ${key}`] = value1;
        } else {
          result[`- ${key}`] = value1;
          result[`+ ${key}`] = value2;
        }
      } else {
        result[`  ${key}`] = value1;
      }
    });
    return result;
  };

  return iter(object1, object2);
};

export default buildObject;
