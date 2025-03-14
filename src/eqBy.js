import { equalsFn } from './equals.js'

export function eqBy(fn, a) {
  return b => equalsFn(fn(a), fn(b))
}
