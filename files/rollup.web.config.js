import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import cleanup from 'rollup-plugin-cleanup'
import { uglify } from 'rollup-plugin-uglify'

const extensions = [ '.js' ]

export default {
  plugins : [
    replace({ 'process.env.NODE_ENV' : JSON.stringify('production') }),
    nodeResolve({
      extensions,
      browser        : true,
      preferBuiltins : true,
    }),
    cleanup(),
    babel({
      babelHelpers : 'bundled',
      extensions,
      exclude      : [ 'node_modules/**' ],
      presets      : [ [ '@babel/preset-env', { targets : { ie : '11' } } ] ],
    }),
    uglify({
      compress : {
        pure_getters : true,
        unsafe       : true,
        unsafe_comps : true,
      },
      warnings : false,
    }),
  ],
  input  : 'rambda.js',
  output : [
    {
      file   : './dist/rambda.umd.js',
      format : 'umd',
      name   : 'R',
    },
  ],
}
