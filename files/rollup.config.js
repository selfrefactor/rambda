import babel from 'rollup-plugin-babel'
import pkg from '../package.json'

export default {
  input     : './rambda.js',
  sourcemap : true,
  plugins   : [ babel() ],
  output    : [
    {
      file   : pkg.main,
      format : 'cjs',
    },
    {
      file   : pkg.module,
      format : 'es',
    },
    {
      file   : pkg.browser,
      format : 'umd',
      name   : 'R',
    },
  ],
}
