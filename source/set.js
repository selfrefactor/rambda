import { curry } from './curry.js'
import { over } from './over.js'

const always = x => () => x

function setFn(lens, replacer, x) {
  return over(lens, always(replacer), x)
}

export const set = curry(setFn)
