import { curry } from './curry'

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value.
 *
 * @func
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
function assocFn(prop, val, obj){
  return Object.assign({}, obj, { [ prop ] : val })
}

export const assoc = curry(assocFn)
