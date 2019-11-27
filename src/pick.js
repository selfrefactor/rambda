export function pick(keys, obj){
  if (arguments.length === 1) return _obj => pick(keys, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  const keysValue =
    typeof keys === 'string' ? keys.split(',') : keys

  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length){
    if (keysValue[ counter ] in obj){
      willReturn[ keysValue[ counter ] ] = obj[ keysValue[ counter ] ]
    }
    counter++
  }

  return willReturn
}
