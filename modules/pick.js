const type = require("./type")
function pick(keys, obj) {
  if (obj === undefined) {
    return holder => pick(keys, holder)
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
