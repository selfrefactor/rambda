import { curry } from './curry'
import { take } from './take'

function zipWithFn(
  fn, x, y
){
  return take(x.length > y.length ? y.length : x.length,
    x).map((xInstance, i) => fn(xInstance, y[ i ]))
}

export const zipWith = curry(zipWithFn)
