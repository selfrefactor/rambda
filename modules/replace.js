const curryThree = require("./internal/curryThree")

function replace(regex, replacer, str) {
  return str.replace(regex, replacer)
}

module.exports = curryThree(replace)
