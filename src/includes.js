import { equals } from './equals'

export function includes(target, list){
  if (arguments.length === 1) return _input => includes(target, _input)

  if (typeof list === 'string'){
    return list.includes(target)
  }
  if (!Array.isArray(list)) return false

  let index = -1

  while (++index < list.length){
    if (equals(list[ index ], target)){
      return true
    }
  }

  return false
}
