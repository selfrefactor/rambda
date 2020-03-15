import { mean } from './mean'

/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.mean
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
export function median(list){
  const len = list.length
  if (len === 0) return NaN
  const width = 2 - len % 2
  const idx = (len - width) / 2

  return mean(Array.prototype.slice.call(list, 0)
    .sort((a, b) => {
      if (a === b) return 0

      return a < b ?
        -1 :
        1
    })
    .slice(idx, idx + width))
}
