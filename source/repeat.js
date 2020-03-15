export function repeat(val, n){
  if (arguments.length === 1) return _n => repeat(val, _n)

  const willReturn = Array(n)

  return willReturn.fill(val)
}
