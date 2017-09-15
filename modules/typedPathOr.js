import path from './path'
import typedDefaultTo from './typedDefaultTo'
import curry from './curry'

function typedPathOr (defaultValue, inputPath, inputObject) {
  return typedDefaultTo(defaultValue, path(inputPath, inputObject))
}

export default curry(typedPathOr)
