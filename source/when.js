import { curry } from './curry'

function whenFn(
  predicate, whenTrueFn, input
){
  if (!predicate(input)) return input

  return whenTrueFn(input)
}

export const when = curry(whenFn)
