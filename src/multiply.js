export function multiply(a, b){
  if (arguments.length === 1) return _b => multiply(a, _b)

  return a * b
}
