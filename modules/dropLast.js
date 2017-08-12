const curryTwo = require("./internal/curryTwo")

function dropLast(dropNumber, a){

  return a.slice(0, -dropNumber)
}

module.exports = curryTwo(dropLast)
