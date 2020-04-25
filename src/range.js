export function range(from, to){
  if (arguments.length === 1) return _to => range(from, _to)

  if (Number.isNaN(Number(from)) || Number.isNaN(Number(to))){
    throw new TypeError('Both arguments to range must be numbers')
  }

  if (to < from) return []

  const len = to - from
  const willReturn = Array(len)

  for (let i = 0; i < len; i++){
    willReturn[ i ] = from + i
  }

  return willReturn
}
