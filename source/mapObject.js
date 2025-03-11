import { keys } from './_internals/keys.js'

export function mapObject(fn) {
  return obj => {
    let index = 0
    const objKeys = keys(obj)
    const len = objKeys.length
    const willReturn = {}

    while (index < len) {
      const key = objKeys[index]
      willReturn[key] = fn(obj[key], key, obj)
      index++
    }

    return willReturn
  }
}
