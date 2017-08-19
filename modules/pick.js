const type = require("./type")

function pick(keys, obj) {
  if(arguments.length === 1){
    return objHolder => pick(keys, objHolder)
  }
  if(!(type(obj) === "Object")){
    return undefined
  }
  if(type(keys)==='String'){
    keys = keys.split(',').map(x => x.trim())
  }

  const willReturn = {}
  let counter = 0
  while (counter < keys.length) {
    if (keys[ counter ] in obj) {
      willReturn[ keys[ counter ] ] = obj[ keys[ counter ] ]
    }
    counter++
  }

  return willReturn
}

module.exports = pick
