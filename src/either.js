export function either(f, g){
  if (arguments.length === 1) return _g => either(f, _g)

  return (...input) => f(...input) || g(...input)
}
