import { addIndex } from './addIndex'
import { reduce } from './reduce'

export function zip(x, y){
  if (arguments.length === 1) return yHolder => zip(x, yHolder)

  return addIndex(reduce)(
    (accum, value, index) =>
      y[ index ] ? accum.concat([ [ value, y[ index ] ] ]) : accum,
    [],
    x
  )
}
