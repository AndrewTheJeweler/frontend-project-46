import yaml from 'js-yaml';

const toParse = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Unknown format: ${format}`);
  }
};

export default toParse;
