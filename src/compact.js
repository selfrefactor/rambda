import { equals } from './equals'
import { type } from './type'

const forbidden = [ 'Null', 'Undefined', 'RegExp' ]
const allowed = [ 'Number', 'Boolean' ]
const notEmpty = [ 'Array', 'String' ]

export function compact(list){
  const toReturn = []

  list.forEach(a => {
    const currentType = type(a)
    if (forbidden.includes(currentType)) return

    if (allowed.includes(currentType)) return toReturn.push(a)

    if (currentType === 'Object'){
      if (!equals(a, {})) toReturn.push(a)

      return
    }

    if (!notEmpty.includes(currentType)) return
    if (a.length === 0) return

    toReturn.push(a)
  })

  return toReturn
}
