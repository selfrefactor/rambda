import { equals } from './equals.js'
import { prop } from './prop.js'

export function eqProps(property, objA) {
  return objB => equals(prop(property, objA), prop(property, objB))
}
