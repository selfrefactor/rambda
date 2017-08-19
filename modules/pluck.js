const curry = require("./internal/curry")
const map = require("./map")

function pluck(keyToPluck,arr){
  const willReturn = []
  map(
    val =>{
      if(!(val[keyToPluck]===undefined)){
        willReturn.push(val[keyToPluck])
      }
    },
    arr
  )
  return willReturn
}

module.exports = curry(pluck)
