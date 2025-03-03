import { defaultTo } from './defaultTo.js'
import { path } from './path.js'

export function pathOr(defaultValue, pathInput) {
  return obj => defaultTo(defaultValue, path(pathInput, obj))
}

