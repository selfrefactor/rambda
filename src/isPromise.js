import { type } from './type.js'

export function isPromise(x){
  return [ 'Async', 'Promise' ].includes(type(x))
}
