const curryTwo = require("./internal/curryTwo")

function has(prop,obj){
  return obj[prop] !== undefined
}

module.exports = curryTwo(has)
