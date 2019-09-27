import { sum } from './sum'

/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
export function mean(list){
  return sum(list) / list.length
}
