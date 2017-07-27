const curry = require("./curry")

function add(a, b){
  if(b === undefined){
    return add.bind(null, a)
  } else if (a === undefined) {
    return add;
  }
  return a + b
}

module.exports = add
