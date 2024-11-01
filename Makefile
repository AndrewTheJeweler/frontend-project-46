publish:
	npm publish --dry-run

install:
	npm ci

gendiff:
	node bin/gendiff.js

lint:
	npx eslint .

fixlint:
	npx eslint --fix .

test:
	npx jest

test-coverage:
	npx jest --bail --coverage --coverageProvider=v8