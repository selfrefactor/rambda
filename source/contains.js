import { equals } from './equals.js'

export function contains(target, toCompare){
  if (arguments.length === 1){
    return _toCompare => contains(target, _toCompare)
  }
  let willReturn = true

  Object.keys(target).forEach(prop => {
    if (!willReturn) return
    if (
      toCompare[ prop ] === undefined ||
      !equals(target[ prop ], toCompare[ prop ])
    ){
      willReturn = false
    }
  })

  return willReturn
}
