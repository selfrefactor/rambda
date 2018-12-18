module.exports = function (wallaby){
  return {
    files: [
      'rambda.js',
      'package.json',
      'src/**/*.js',
      '!src/**/*.spec.js'
    ],
    tests: [
      'src/**/*.spec.js'
    ],
    projectCacheDir: 'node_modules',
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel()
    },
    workers: {
      reload: true,
      initial: 2,
      regular: 1
    },
    delays: {
      run: 1000
    },
    env: {
      type: 'node',
    },
    testFramework: 'jest',
    debug:true
  }
}
