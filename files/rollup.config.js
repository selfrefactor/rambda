import babel from '@rollup/plugin-babel';
import cleanup from 'rollup-plugin-cleanup'
import replace from '@rollup/plugin-replace'
import {nodeResolve}  from '@rollup/plugin-node-resolve'

const extensions = [ '.js' ]

export default {
  plugins : [
    replace({ 'process.env.NODE_ENV' : JSON.stringify('production') }),
    nodeResolve({
      extensions,
      browser: false,
      preferBuiltins : true,
    }),
    cleanup(),
    babel({ 
      babelHelpers: 'bundled',
        extensions,
        exclude : [ 'node_modules/**' ],
    })
  ],
  input  : 'rambda.js',
  output : [
    {
      file   : './dist/rambda.js',
      format : 'cjs',
    },
    {
      file   : './dist/rambda.esm.js',
      format : 'es',
    },
    {
      file   : './dist/rambda.mjs',
      format : 'esm',
    },
  ],
}
