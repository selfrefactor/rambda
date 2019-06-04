/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} keys an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `keys` on it.
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
export function pick(keys, obj){
  if (arguments.length === 1) return _obj => pick(keys, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  const keysValue =
    typeof keys === 'string' ? keys.split(',') : keys

  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length){
    if (keysValue[ counter ] in obj){
      willReturn[ keysValue[ counter ] ] = obj[ keysValue[ counter ] ]
    }
    counter++
  }

  return willReturn
}
