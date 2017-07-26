const curry = require("./curry")

function add(a, b){
  if(b === undefined){
    return holder => add(a,holder)
  }
  return a + b
}

module.exports = add
