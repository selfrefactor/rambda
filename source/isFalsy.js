import { type } from './type'

export function isFalsy(x){
  const typeIs = type(x)
  if ([ 'Array', 'String' ].includes(typeIs)) return x.length === 0
  if (typeIs === 'Object') return Object.keys(x).length === 0
  if ([ 'Null', 'Undefined' ].includes(typeIs)) return true

  return false
}
