import { path } from './path'
import { curry } from './curry'

function pathOrRaw(defaultValue, inputPath, inputObject) {
  const inputArgument = path(inputPath, inputObject)

  return inputArgument === undefined ||
    inputArgument === null ||
    Number.isNaN(inputArgument) === true ?
      defaultValue :
      inputArgument
}

export const pathOr = curry(pathOrRaw)
