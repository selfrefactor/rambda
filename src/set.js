import { always } from './always'
import { curry } from './curry'
import { over } from './over'

function setFn(
  lens, replacer, x
){
  return over(
    lens, always(replacer), x
  )
}

export const set = curry(setFn)
