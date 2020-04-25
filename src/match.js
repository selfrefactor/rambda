export function match(pattern, str){
  if (arguments.length === 1) return _str => match(pattern, _str)

  const willReturn = str.match(pattern)

  return willReturn === null ? [] : willReturn
}
