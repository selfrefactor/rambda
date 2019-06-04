import baseSlice from './internal/baseSlice'

/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
export function init(list){
  if (typeof list === 'string') return list.slice(0, -1)

  return list.length ? baseSlice(list, 0, -1) : []
}
