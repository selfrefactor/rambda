    "shake": "node node_modules/bundle-phobia-cli/index.js ramda rambda",
    "on": "node src/findFailingTests.js",
    "test": "cd ramda&&BABEL_ENV=cjs node node_modules/mocha/bin/mocha --require @babel/register --reporter spec test/isEmpty.js"
