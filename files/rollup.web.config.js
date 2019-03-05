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
      preferBuiltins: false
    }),
    babel({
      extensions,
      exclude: ["node_modules/**"]
		})
  ],
  input: "rambda.js",
   output : [
    {
      file   : './dist/rambda.umd.js',
      format : 'umd',
      name   : 'R',
    },
  ],
}  