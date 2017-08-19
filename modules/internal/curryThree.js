const curry = require("./curry")

function curryThree(fn){
  return (x,y,z) => {
    if(y === undefined){
      const helper = (yHolder, zHolder) => {
        return fn(x, yHolder, zHolder)
      }
      return curry(helper)
    }else if(z === undefined){
      return zHolder => fn(x, y, zHolder) 
    }
    return fn(x,y,z)
  }
}

module.exports = curryThree 