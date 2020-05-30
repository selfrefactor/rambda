import { type } from './type'

export function values(obj){
  if (type(obj) !== 'Object') return []

  return Object.values(obj)
}
