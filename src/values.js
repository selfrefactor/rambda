import { type } from './type.js'

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 *
 * @func
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
export function values(obj){
  if (type(obj) !== 'Object') return []

  return Object.values(obj)
}
