# Ramda tests

Check differences between `Ramda` and `Rambda`

## Find failing tests

- Clone Ramda

`git clone https://github.com/ramda/ramda`

or

`run read https://github.com/ramda/ramda`

- Edit .gitignore so ramda folder is indexable

- Search and replace with VSCode(or other IDE) all occurances of `require('../source')` with `require('rambda')`

- Run `yarn` in `ramda` directory

- Finally run `yarn on` in `ramda-tests` directory

## Parse Ramda test to Rambda test

    "clone": "run read https://github.com/ramda/ramda.git",
    "shake": "node node_modules/bundle-phobia-cli/index.js ramda rambda",
    "on": "node src/findFailingTests.js",
    "test": "cd ramda&&BABEL_ENV=cjs node node_modules/mocha/bin/mocha --require @babel/register --reporter spec test/isEmpty.js"
