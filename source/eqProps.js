import { equalsFn } from './equals.js'
import { prop } from './prop.js'

export function eqProps(property, objA) {
  return objB => equalsFn(prop(property, objA), prop(property, objB))
}
