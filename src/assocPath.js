import { createPath } from './_internals/createPath.js'
import { assoc } from './assoc.js'

export function assocPath(path, newValue) {
  return input => {
    const pathArrValue = createPath(path)
    if (pathArrValue.length === 0) {
      return newValue
    }

    const index = pathArrValue[0]
    if (pathArrValue.length > 1) {
      const nextInput =
        typeof input !== 'object' || input === null || !Object.hasOwn(input, index)
          ? {}
          : input[index]

      newValue = assocPath(
        Array.prototype.slice.call(pathArrValue, 1),
        newValue,
      )(nextInput)
    }

    return assoc(index, newValue)(input)
  }
}
