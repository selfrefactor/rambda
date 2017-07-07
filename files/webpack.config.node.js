module.exports = {
  entry:"./rambda.js",
  output: {
    filename: "index.js",
    libraryTarget: "commonjs-module",
  },
  module:{
    rules:[
      {
        test    : /\.js$/,
        loader  : "babel-loader",
        options : {
          presets : ["es2015"],
        },
      }
    ] 
  }
}
