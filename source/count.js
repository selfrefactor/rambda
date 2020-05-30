import { _isArray } from './_internals/_isArray'
import { equals } from './equals'

export function count(searchFor, list){
  if (arguments.length === 1){
    return listHolder => count(searchFor, listHolder)
  }
  if (!_isArray(list)) return 0

  return list.filter(x => equals(x, searchFor)).length
}
