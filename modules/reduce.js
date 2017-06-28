function reduce(fn, initialValue, arr) {
  if (initialValue === undefined) {
    return (initialValueHolder, arrHolder) => reduce(fn, initialValueHolder, arrHolder)
  }else if(arr === undefined){
    
    return holder => reduce(fn, initialValue, holder)
  }

  return arr.reduce(fn, initialValue)
}

module.exports = reduce 
