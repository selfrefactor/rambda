import { curry } from './curry.js'

const Identity = x => ({
  map : fn => Identity(fn(x)),
  x,
})

function overFn(
  lens, fn, object
){
  return lens(x => Identity(fn(x)))(object).x
}

export const over = curry(overFn)
