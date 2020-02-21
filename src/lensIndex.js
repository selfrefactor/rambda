import { lens } from './lens'
import { nth } from './nth'
import { update } from './update'

export function lensIndex(i){
  return lens(nth(i), update(i))
}
