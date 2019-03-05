const babel = require("rollup-plugin-babel")
const replace = require("rollup-plugin-replace")
const resolve = require("rollup-plugin-node-resolve")

const extensions = [".js"]

export default {
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve({
      extensions,
      preferBuiltins: true
    }),
    babel({
      extensions,
      exclude: ["node_modules/**"]
		}),
  ],
  input: "rambda.js",
  output   : [
    {
      file   : './dist/rambda.js',
      format : 'cjs',
    },
    {
      file   : './dist/rambda.esm.js',
      format : 'es',
    },
  ],
}  