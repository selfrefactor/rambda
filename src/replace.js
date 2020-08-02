import { curry } from './curry'

function replaceFn(
  pattern, replacer, str
){
  return str.replace(pattern, replacer)
}

export const replace = curry(replaceFn)
