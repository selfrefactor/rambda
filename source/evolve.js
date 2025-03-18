import { mapObject } from './mapObject.js'

export function evolve(rules) {
  return mapObject((x, prop) => rules[prop](x))
}
