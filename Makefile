gendiff:
	node bin/gendiff.js

install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

test: 
	NODE_OPTIONS=--experimental-vm-modules npx jest

report:
	./gradlew jacocoTestReport

test-coverage:
	npm test -- --coverage --coverageProvider=v8