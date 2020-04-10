module.exports = wallaby => ({
  files : [
    {
      pattern    : 'package.json',
      instrument : false,
      load       : true,
    },
    {
      pattern    : 'babel.config.js',
      instrument : false,
      load       : true,
    },
    '!source/**/*spec.js',
    'source/**/*.js',
    'rambda.js',
  ],
  tests : [ '!source/_build.spec.js', '!source/_typings.spec.js', 'source/**/*.spec.js' ],
  env   : {
    type   : 'node',
    runner : 'node',
  },
  compilers : {
    'source/**/*.js' : wallaby.compilers.babel(),
    'rambda.js'      : wallaby.compilers.babel(),
  },
  testFramework : 'jest',
})
