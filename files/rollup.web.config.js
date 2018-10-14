import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import { umd } from '../package.json'

export default {
  external  : false,
  input     : './rambda.js',
  treeshake : false,
  plugins   : [
    resolve(),
    babel(),
  ],
  output : [
    {
      file   : umd,
      format : 'umd',
      name   : 'R',
    },
  ],
}
