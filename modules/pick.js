export default function pick (keys, obj) {
  if (arguments.length === 1) {
    return objHolder => pick(keys, objHolder)
  }
  if (obj === null || obj === undefined) {
    return undefined
  }
  if (typeof keys === 'string') {
    keys = keys.split(',')
  }

  const willReturn = {}
  let counter = 0
  while (counter < keys.length) {
    if (keys[ counter ] in obj) {
      willReturn[ keys[ counter ] ] = obj[ keys[ counter ] ]
    }
    counter++
  }

  return willReturn
}
