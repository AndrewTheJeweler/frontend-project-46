import stylish from './stylish.js';

const formatting = (data, format = 'stylish') => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    default:
      throw new Error(`Unknown format ${format}`);
  }
};

export default formatting;
