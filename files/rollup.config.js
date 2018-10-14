import babel from 'rollup-plugin-babel'
import packageJson from '../package.json'

export default {
  input   : './rambda.js',
  plugins : [ babel() ],
  output  : [
    {
      file   : packageJson.main,
      format : 'cjs',
    },
    {
      file   : packageJson.module,
      format : 'es',
    },
  ],
}
