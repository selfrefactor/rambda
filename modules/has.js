const curry = require("./internal/curry")

function has(prop,obj){
  return obj[prop] !== undefined
}

module.exports = curry(has)
