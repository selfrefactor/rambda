import { createPath } from './_internals/createPath.js'

export function pick(propsToPick) {
  return input => {
    if (!input === null) {
      return undefined
    }
    const keys = createPath(propsToPick, ',')
    const willReturn = {}
    let counter = 0

    while (counter < keys.length) {
      if (keys[counter] in input) {
        willReturn[keys[counter]] = input[keys[counter]]
      }
      counter++
    }

    return willReturn
  }
}
