const options = { targets : { node : 'current' } }

module.exports = function (wallaby){
  return {
    name: 'Rambda',
    filesWithNoCoverageCalculated: ['src/**/*.js'],
    runMode: 'onsave',
    files: [
      { pattern: 'rambda.js', load: false },
      { pattern: 'package.json', load: false },
      { pattern: 'source/*.js', load: false },
      { pattern: 'source/_internals/*.js', load: false },
      { pattern: '!scripts/**/*.js', load: false, instrument:false },
      { pattern: 'src/*.js', load: false },
      { pattern: 'src/_internals/*.js', load: false },
      { pattern: '!source/**/*.spec.js', load: false },
    ],
    tests: [
      'source/**/*.spec.js'
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets : [ ['@babel/preset-env', options] ],
      })
    },
    workers: {
      reload: true,
      initial: 4,
      regular: 2
    },
    env: {
      type: 'node',
      params: {
        env: 'WALLABY=ON'
      }
    },
    testFramework: 'jest',
    debug: false,
  }
}