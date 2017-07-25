const curry = require("./curry")

function add(a, b){
  return a + b
}

module.exports = curry(add)
