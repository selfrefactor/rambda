import { always } from './always'
import { over } from './over'

export function set(
  lens, v, x
){
  if (arguments.length === 1)
    return (_v, _x) => set(
      lens, _v, _x
    )
  if (arguments.length === 2)
    return _x => set(
      lens, v, _x
    )

  return over(
    lens, always(v), x
  )
}
