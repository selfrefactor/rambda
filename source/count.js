import { equals } from './equals'

export function count(searchFor, list){
  if (arguments.length === 1){
    return listHolder => count(searchFor, listHolder)
  }
  if (!Array.isArray(list)) return 0

  return list.filter(x => equals(x, searchFor)).length
}
