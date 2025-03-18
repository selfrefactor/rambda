import { mapObject } from './mapObject.js'
import { type } from './type.js'

export function evolve(rules) {
  return mapObject((x, prop) => type(rules[prop]) === 'Function' ? rules[prop](x): x)
}
