import { equalsFn } from './equals.js'

export function eqProps(property, objA) {
  return objB => equalsFn( objA[property], objB[property] )
}
