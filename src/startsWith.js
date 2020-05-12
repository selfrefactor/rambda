export function startsWith(target, str){
  if (arguments.length === 1) return _str => startsWith(target, _str)

  return str.startsWith(target)
}
