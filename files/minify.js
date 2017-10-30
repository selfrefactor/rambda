const { minify } = require('minify')

minify({
  filePath : 'dist/rambda.umd.js',
  output   : 'webVersion.js',
})
