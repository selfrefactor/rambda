import { createPath } from './_internals/createPath.js'

export function _includes(x, list) {
  let index = -1
  const { length } = list

  while (++index < length) {
    if (String(list[index]) === String(x)) {
      return true
    }
  }

  return false
}

export function omit(propsToOmit) {
  return obj => {
    if (!obj) {
      return undefined
    }

    const propsToOmitValue = createPath(propsToOmit, ',')
    const willReturn = {}

    for (const key in obj) {
      if (!_includes(key, propsToOmitValue)) {
        willReturn[key] = obj[key]
      }
    }

    return willReturn
  }
}
