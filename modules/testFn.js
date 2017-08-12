const curryTwo = require("./internal/curryTwo")

function test(regex, str){
  return str.search(regex) === -1 ?
    false :
    true
}

module.exports = curryTwo(test)
