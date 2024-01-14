import { type } from './type.js'

export function values(obj){
  if (type(obj) !== 'Object') return []

  if(!obj || typeof obj !== 'object') return []
  return Object.values(obj)
}