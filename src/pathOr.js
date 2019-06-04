import { curry } from './curry'
import { defaultTo } from './defaultTo'
import { path } from './path'

/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} defaultValue The default value.
 * @param {Array} list The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
function pathOrRaw(defaultValue, list, obj){
  return defaultTo(
    defaultValue,
    path(list, obj)
  )
}

export const pathOr = curry(pathOrRaw)
