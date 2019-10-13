/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @example
 *
 *      R.omit('a,d', {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
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
