import { path } from './path'

export function hasPath(maybePath, obj){
  if (arguments.length === 1){
    return objHolder => hasPath(maybePath, objHolder)
  }

  return path(maybePath, obj) !== undefined
}
