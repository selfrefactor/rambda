const type = require("./type")

function path(pathArr, obj) {
  if(arguments.length === 1){
    return objHolder => path(pathArr, objHolder)
  }
  if(!(type(obj) === "Object")){
    return undefined
  }
  let holder = obj
  let counter = 0
  if(typeof pathArr === "string"){
    pathArr = pathArr.split(".")
  }
  while (counter < pathArr.length) {
    if (holder === null || holder === undefined) {
      return undefined
    }
    holder = holder[ pathArr[ counter ] ]
    counter++
  }

  return holder
}

module.exports = path
