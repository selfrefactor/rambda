import _isInteger from './internal/_isInteger'

/**
 * @func
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @see R.modulo
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 */
export function mathMod(m, p){
  if (arguments.length === 1) return _p => mathMod(m, _p)
  if (!_isInteger(m) || !_isInteger(p) || p < 1) return NaN

  return (m % p + p) % p
}
