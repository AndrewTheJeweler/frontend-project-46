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
