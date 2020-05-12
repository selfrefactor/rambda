import { assocPath } from './assocPath'
import { lens } from './lens'
import { path } from './path'

export function lensPath(key){
  return lens(path(key), assocPath(key))
}
