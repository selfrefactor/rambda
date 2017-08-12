const curryTwo = require("./internal/curryTwo")

function find(fn, arr){
  return arr.find(fn)
}

module.exports = curryTwo(find)
