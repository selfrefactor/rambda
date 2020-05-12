export function endsWith(target, str){
  if (arguments.length === 1) return _str => endsWith(target, _str)

  return str.endsWith(target)
}
