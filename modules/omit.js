const type = require("./type")

function omit(keys, obj){
  if (obj === undefined) {
    return holder => omit(keys, holder)
  }
  if(type(keys)==='String'){
    keys = keys.split(',').map(x => x.trim())
  }
  
  const willReturn = {}
  for (const key in obj) {
    if (!keys.includes(key)) {
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}

module.exports = omit
