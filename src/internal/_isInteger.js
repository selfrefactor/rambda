export function _isInteger(n){
  return n << 0 === n
}

export default Number.isInteger || _isInteger
