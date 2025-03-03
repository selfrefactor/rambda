import { prop } from './prop.js'

export function propSatisfies(predicate, property) {
  return obj => predicate(prop(property, obj))
}
