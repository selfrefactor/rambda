import { type } from './type'

export function isPromise(x){
  return [ 'Async', 'Promise' ].includes(type(x))
}
