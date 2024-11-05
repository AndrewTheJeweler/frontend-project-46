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
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test