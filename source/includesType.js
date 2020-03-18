import { any } from './any'
import { type } from './type'

export function includesType(targetType, list){
  if (arguments.length === 1){
    return listHolder => includesType(targetType, listHolder)
  }

  return any(x => type(x) === targetType, list)
}
