const curryTwo = require("./internal/curryTwo")

function prop(key, obj) {
  return obj[ key ]
}

module.exports = curryTwo(prop)
