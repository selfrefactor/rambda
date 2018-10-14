export default function pick (keys, obj) {
  if (arguments.length === 1) {
    return objHolder => pick(keys, objHolder)
  }
  if (obj === null || obj === undefined) {
    return undefined
  }
  const keysValue = typeof keys === 'string' ?
    keys.split(',') :
    keys

  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length) {
    if (keysValue[ counter ] in obj) {
      willReturn[ keysValue[ counter ] ] = obj[ keysValue[ counter ] ]
    }
    counter++
  }

  return willReturn
}
