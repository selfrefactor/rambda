import { curry } from './curry'
import { defaultTo } from './defaultTo'
import { path } from './path'

function pathOrFn(
  defaultValue, list, obj
){
  return defaultTo(defaultValue, path(list, obj))
}

export const pathOr = curry(pathOrFn)
