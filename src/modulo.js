export function modulo(a, b){
  if (arguments.length === 1) return _b => modulo(a, _b)

  return a % b
}
