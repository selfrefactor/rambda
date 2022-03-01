import { curry } from './curry.js'
import { view } from './view.js'

function lensSatisfiesFn(
  predicate, lens, input
){
  return Boolean(predicate(view(lens, input)))
}

export const lensSatisfies = curry(lensSatisfiesFn)
