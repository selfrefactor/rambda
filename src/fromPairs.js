/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} list An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
export function fromPairs(list){
  const toReturn = {}
  list.forEach(([ prop, value ]) => toReturn[ prop ] = value)

  return toReturn
}
