import { includes } from './includes'
import { reduce } from './reduce'

/**
 * Returns a new list without values in the first argument.
 * [`R.equals`](#equals) is used to determine equality.
 *
 * @func
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} left The values to be removed from `right`.
 * @param {Array} right The array to remove values from.
 * @return {Array} The new array without values in `left`.
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
export function without(left, right){
  if (right === undefined){
    return _right => without(left, _right)
  }

  return reduce(
    (accum, item) =>
      includes(item, left) ? accum : accum.concat(item),
    [],
    right
  )
}
