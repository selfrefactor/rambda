import { _isInteger } from './internal/_isInteger'
import { assoc } from './assoc'
import { curry } from './curry'

/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path
 *
 * @func
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {Array<String>|String} list The path to use.
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @example
 *
 *      R.assocPath('a.b.c', 3, {a: {b: {c: 1}} ); //=> {a: {b: {c: 3}}}
 *      R.assocPath('a.b.c', 3, {a: 5});           //=> {a: {b: {c: 3}}}
 */
function assocPathFn(list, val, obj){
  const pathArrValue = typeof list === 'string' ? list.split('.') : list
  if (pathArrValue.length === 0){
    return val
  }
  // if(obj === null) return

  const index = pathArrValue[ 0 ]
  if (pathArrValue.length > 1){
    const nextObj = typeof obj !== 'object' || obj === null || !obj.hasOwnProperty(index) ?
      _isInteger(parseInt(pathArrValue[ 1 ], 10)) ? [] : {} :
      obj[ index ]
    val = assocPathFn(Array.prototype.slice.call(pathArrValue, 1), val, nextObj)
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(obj)){
    const arr = [].concat(obj)
    arr[ index ] = val

    return arr
  }

  return assoc(index, val, obj)

}

export const assocPath = curry(assocPathFn)
