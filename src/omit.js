/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} keys an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `keys` not on it.
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
export function omit(keys, obj){
  if (arguments.length === 1) return _obj => omit(keys, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }

  const keysValue =
    typeof keys === 'string' ? keys.split(',') : keys

  const willReturn = {}

  for (const key in obj){
    if (!keysValue.includes(key)){
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}
