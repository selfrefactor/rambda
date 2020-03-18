import _isInteger from './internal/_isInteger'

export function mathMod(m, p){
  if (arguments.length === 1) return _p => mathMod(m, _p)
  if (!_isInteger(m) || !_isInteger(p) || p < 1) return NaN

  return (m % p + p) % p
}
