const curryTwo = require("./internal/curryTwo")

function add(a, b){

  return a + b
}
 
module.exports = curryTwo(add)
