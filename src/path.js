/**
 * Retrieve the value at a given path.
 *
 * @example
 *
 *      R.path('a.b', {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
export function path(list, obj){
  if (arguments.length === 1) return _obj => path(list, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  let willReturn = obj
  let counter = 0

  const pathArrValue = typeof list === 'string' ? list.split('.') : list

  while (counter < pathArrValue.length){
    if (willReturn === null || willReturn === undefined){
      return undefined
    }
    willReturn = willReturn[ pathArrValue[ counter ] ]
    counter++
  }

  return willReturn
}
