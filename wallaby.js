module.exports = function (wallaby){
  return {
    files: [
      'rambda.js',
      'package.json',
      'modules/**/*.js'
    ],
    tests: [
      '__tests__/**/*.js'
    ],
    env: {
      type: 'node',
      kind:'chrome',
      runner: 'node'
    },
    projectCacheDir: 'node_modules',
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },
    testFramework: 'jest',
    debug:false
  }
}