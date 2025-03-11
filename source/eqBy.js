import { equals } from './equals.js'

export function eqBy(fn, a) {
  return b => equals(fn(a), fn(b))
}
