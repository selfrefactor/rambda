import { equals } from './equals'
import { type } from './type'

const forbidden = [ 'Null', 'Undefined', 'RegExp' ]
const allowed = [ 'Number', 'Boolean' ]
const notEmpty = [ 'Array', 'String' ]

export function compact(arr){
  const willReturn = []
  arr.forEach(a => {
    const currentType = type(a)
    if (forbidden.includes(currentType)) return

    if (allowed.includes(currentType)) return willReturn.push(a)

    if (currentType === 'Object'){
      if (!equals(a, {})) willReturn.push(a)

      return
    }

    if (!notEmpty.includes(currentType)) return
    if (a.length === 0) return

    willReturn.push(a)
  })

  return willReturn
}
