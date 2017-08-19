const curry = require("./internal/curry")

function find(fn, arr){
  return arr.find(fn)
}

module.exports = curry(find)
