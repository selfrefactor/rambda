import { type } from './type'

export function isFunction(fn){
  return [ 'Async', 'Promise', 'Function' ].includes(type(fn))
}
