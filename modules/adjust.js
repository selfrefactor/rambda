function adjust(fn, index, arr){
  if (index === undefined || arr === undefined) {
    return adjust.bind(null, fn)
  } else if (arr === undefined) {
    return adjust.bind(null, fn, index)
  }
  if(index < 0) {
    return arr;
  }
  const clonedArr = arr.slice()
  clonedArr[index] = fn(clonedArr[index])
  
  return clonedArr;
}

module.exports = adjust
