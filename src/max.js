export function max(a, b){
  if (arguments.length === 1) return _b => max(a, _b)

  return b > a ? b : a
}
