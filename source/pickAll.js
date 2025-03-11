import { createPath } from './_internals/createPath.js'

export function pickAll(propsToPick) {
  return obj => {
    if (obj === null || obj === undefined) {
      return undefined
    }
    const keysValue = createPath(propsToPick, ',')
    const willReturn = {}
    let counter = 0

    while (counter < keysValue.length) {
      if (keysValue[counter] in obj) {
        willReturn[keysValue[counter]] = obj[keysValue[counter]]
      } else {
        willReturn[keysValue[counter]] = undefined
      }
      counter++
    }

    return willReturn
  }
}
