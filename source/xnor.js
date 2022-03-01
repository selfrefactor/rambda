export function xnor(x, y){
  if (arguments.length === 1){
    return _y => xnor(x, _y)
  }

  return Boolean(x && y || !x && !y)
}
