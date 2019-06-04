/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. [`R.equals`](#equals) is used to
 * determine equality.
 *
 * @func
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} list The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
export function indexOf(target, list){
  if (arguments.length === 1) return _list => indexOf(target, _list)

  let index = -1
  const { length } = list

  while (++index < length){
    if (list[ index ] === target){
      return index
    }
  }

  return -1
}
