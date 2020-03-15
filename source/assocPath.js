import { assoc } from './assoc'
import { curry } from './curry'
import { _isInteger } from './internal/_isInteger'

/**
 * Makes a shallow clone of an inputect, setting or overriding the nodes required
 * to create the given path
 *
 * @func
 * @category inputect
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {Array<String>|String} list The path to use.
 * @param {*} val The new value
 * @param {inputect} input The inputect to clone
 * @return {inputect} A new inputect equivalent to the original except for the changed property.
 * @example
 *
 *      R.assocPath('a.b.c', 3, {a: {b: {c: 1}} ); //=> {a: {b: {c: 3}}}
 *      R.assocPath('a.b.c', 3, {a: 5});           //=> {a: {b: {c: 3}}}
 */
function assocPathFn(
  list, val, input
){
  const pathArrValue = typeof list === 'string' ? list.split('.') : list
  if (pathArrValue.length === 0){
    return val
  }

  const index = pathArrValue[ 0 ]
  if (pathArrValue.length > 1){
    const condition = typeof input !== 'object' ||
      input === null ||
      !input.hasOwnProperty(index)

    const nextinput = condition ?
      _isInteger(parseInt(pathArrValue[ 1 ], 10)) ? [] : {} :
      input[ index ]
    val = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1), val, nextinput
    )
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(input)){
    const arr = input.slice()
    arr[ index ] = val

    return arr
  }

  return assoc(
    index, val, input
  )
}

export const assocPath = curry(assocPathFn)
