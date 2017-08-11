const curryTwo = require("./internal/curryTwo")

function drop(dropNumber, a){
  return a.slice(dropNumber)
}

module.exports = curryTwo(drop)
