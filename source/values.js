import { type } from './type.js'
import * as a from 'remeda'

export function values(obj){
  if (type(obj) !== 'Object') return []
  return Object.values(obj)
}