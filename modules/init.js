const baseSlice = require("./baseSlice")

function init(a){
  console.log(a,baseSlice(a, 0, -1))
  if (typeof a === "string") {
    return a.slice(0, -1)
  }

  return a.length ? baseSlice(a, 0, -1) : []
}

module.exports = init
