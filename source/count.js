import { equals } from './equals'

// NODOCS
export function count(target, list){
  if (arguments.length === 1){
    return listHolder => count(target, listHolder)
  }
  if (!Array.isArray(list)) return 0

  return list.filter(x => equals(x, target)).length
}
