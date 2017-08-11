const type = require("./type")
const curry = require("./curry")

function path(pathArr, obj) {
  if(!(type(obj) === "Object")){
    return undefined
  }
  let holder = obj
  let counter = 0
  if(typeof pathArr === "string"){
    pathArr = pathArr.split(".")
  }
  while (counter < pathArr.length) {
    if (holder === null) {
      return undefined
    }
    holder = holder[ pathArr[ counter ] ]
    counter++
  }

  return holder
}

module.exports = curry(path)
