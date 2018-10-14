import defaultTo from './defaultTo'
import path from './path'
import curry from './curry'

function pathOr (defaultValue, inputPath, inputObject) {
  return defaultTo(defaultValue, path(inputPath, inputObject))
}

export default curry(pathOr)
