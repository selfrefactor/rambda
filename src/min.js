export function min(a, b){
  if (arguments.length === 1) return _b => min(a, _b)

  return b < a ? b : a
}
