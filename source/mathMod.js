import _isInteger from './_internals/_isInteger'

export function mathMod(x, y){
  if (arguments.length === 1) return _y => mathMod(x, _y)
  if (!_isInteger(x) || !_isInteger(y) || y < 1) return NaN

  return (x % y + y) % y
}
