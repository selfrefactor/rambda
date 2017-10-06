export default function path (pathArr, obj) {
  if (arguments.length === 1) {
    return objHolder => path(pathArr, objHolder)
  }
  if (obj === null || obj === undefined) {
    return undefined
  }
  let holder = obj
  let counter = 0
  if (typeof pathArr === 'string') {
    pathArr = pathArr.split('.')
  }
  while (counter < pathArr.length) {
    if (holder === null || holder === undefined) {
      return undefined
    }
    holder = holder[ pathArr[ counter ] ]
    counter++
  }

  return holder
}
