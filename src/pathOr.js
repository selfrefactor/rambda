import {curry} from './curry'
import {defaultTo} from './defaultTo'
import {path} from './path'

function pathOrFn(defaultValue, pathInput, obj) {
  return defaultTo(defaultValue, path(pathInput, obj))
}

export const pathOr = curry(pathOrFn)
