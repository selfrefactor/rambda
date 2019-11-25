/**
 * Returns a function that always returns the given value.
 *
 * @func
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} x The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
export function always(x){
  return () => x
}
