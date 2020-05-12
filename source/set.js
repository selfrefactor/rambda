import { always } from './always'
import { over } from './over'

export function set(
  lens, replacer, x
){
  if (arguments.length === 1) return (_v, _x) => set(
    lens, _v, _x
  )
  if (arguments.length === 2) return _x => set(
    lens, replacer, _x
  )

  return over(
    lens, always(replacer), x
  )
}
