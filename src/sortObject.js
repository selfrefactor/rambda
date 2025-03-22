import { sort } from './sort.js'

export function sortObject(predicate) {
  return obj => {
    const keys = Object.keys(obj)
    const sortedKeys = sort((a, b) => predicate(a, b, obj[a], obj[b]))(keys)

    const toReturn = {}
    sortedKeys.forEach(singleKey => {
      toReturn[singleKey] = obj[singleKey]
    })

    return toReturn
  }
}
