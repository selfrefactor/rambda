import { always } from './always'
import { over } from './over'
import {curry} from './curry'

function setFn(
  lens, replacer, x
){
  return over(
    lens, always(replacer), x
  )
}

export const set = curry(setFn)