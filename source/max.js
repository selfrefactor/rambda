import { path } from './path.js'

export function max(fnOrPath) {
  const getValue = typeof fnOrPath === 'function'
    ? fnOrPath
    : path(fnOrPath)

  return list => {
    let result
    let resultValue
    let index = 0
    const len = list.length

    while (index < len) {
      const value = getValue(list[index])

      if (value !== undefined && value !== null) {
        if (resultValue === undefined || value > resultValue) {
          result = list[index]
          resultValue = value
        }
      }

      index++
    }

    return result
  }
}
