import {curry} from './curry'
import {view} from './view'

function lensSatisfiesFn(predicate, lens, input) {
  return Boolean(predicate(view(lens, input)))
}

export const lensSatisfies = curry(lensSatisfiesFn)
