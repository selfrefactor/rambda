import { curryN } from './curryN'

export function curry(fn){
  return curryN(fn.length, fn)
}
