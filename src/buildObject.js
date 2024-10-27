import _ from 'lodash';

const buildObject = (object1, object2) => {
  const object1Key = Object.keys(object1);
  const object2Key = Object.keys(object2);
  const keys = _.sortBy(_.union(object1Key, object2Key));
  const result = {};

  // eslint-disable-next-line array-callback-return
  keys.map((key) => {
    if (!Object.hasOwn(object1, key)) {
      result[`+ ${key}`] = object2[key];
    } else if (!Object.hasOwn(object2, key)) {
      result[`- ${key}`] = object1[key];
    } else if (object1[key] !== object2[key]) {
      result[`- ${key}`] = object1[key];
      result[`+ ${key}`] = object2[key];
    } else {
      result[`  ${key}`] = object1[key];
    }
  });

  return result;
};

export default buildObject;
