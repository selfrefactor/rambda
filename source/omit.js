import { createPath } from './_internals/createPath.js'

export function _includes(a, list) {
  let index = -1
  const { length } = list

  while (++index < length) {
    if (String(list[index])=== String(a)) {
      return true
    }
  }

  return false
}


export function omit(propsToOmit, obj) {
  if (arguments.length === 1) {
    return _obj => omit(propsToOmit, _obj)
  }

  if (obj === null || obj === undefined) {
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
