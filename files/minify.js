const { minify } = require('minify')

minify({ filePath : 'dist/rambda.umd.js', output:'_' })
minify({ filePath : 'dist/rambda.js', output:'_' })
minify({ filePath : 'dist/rambda.esm.js', output:'_' })
