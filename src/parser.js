import yaml from 'js-yaml';

const toParse = (data, format) => {
	switch (format) {
		case 'json':
			return JSON.parse(data);
		case 'yaml':
			return yaml.load(data);
		case 'yml':
			return yaml.load(data);
		default:
			throw new Error(`Unknown format: ${format}`);
	}
};

export default toParse;