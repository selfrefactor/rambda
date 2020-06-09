function range(start, end){
  const len = end - start
  const willReturn = Array(len)

  for (let i = 0; i < len; i++){
    willReturn[ i ] = start + i
  }

  return willReturn
}
exports.range = range
exports.F = () => false
exports.T = () => true
