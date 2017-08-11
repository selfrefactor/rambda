const type = require("./type")
const curryTwo = require("./internal/curryTwo")

function omit(keys, obj){
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

module.exports = curryTwo(omit)
