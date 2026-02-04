import { init } from './init.js'
import { tail } from './tail.js'

export function middle(listOrString) {
  return tail(init(listOrString))
}
