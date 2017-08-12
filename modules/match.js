const curryTwo = require("./internal/curryTwo")

function match(regex, str) {
  const willReturn = str.match(regex)

  return willReturn === null ?
    [] :
    willReturn
}

module.exports = curryTwo(match)
