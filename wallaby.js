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
    workers: {
      reload: true,
      initial: 4,
      regular: 2
    },
    delays: {
      run: 1000
    },
    testFramework: 'jest',
    debug:true
  }
}