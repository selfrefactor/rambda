import { type } from './type.js'

export function isEmpty(input){
  const inputType = type(input)
  if ([ 'NaN', 'Null', 'Number', 'Undefined' ].includes(inputType))
    return false
  if (!input) return true

  if (inputType === 'Object') return Object.keys(input).length === 0

  if (inputType === 'Array') return input.length === 0

  return false
}
