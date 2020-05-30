import { curryN } from './curryN'

export function curry(fn, args = []){
  return curryN(fn.length, fn)
}
