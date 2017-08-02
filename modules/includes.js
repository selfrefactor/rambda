function includes(x, arrOrStr){
  if(arrOrStr === undefined){
    return holder => includes(x, holder)
  }
  return arrOrStr.includes(x)
}

module.exports = includes