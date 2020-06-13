import { type } from './type'

export function isFunction(fn){
  return [ 'Async', 'Function' ].includes(type(fn))
}
