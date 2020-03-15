import { includes } from './includes'
import { reduce } from './reduce'

export function without(left, right){
  if (right === undefined){
    return _right => without(left, _right)
  }

  return reduce(
    (accum, item) =>
      includes(item, left) ? accum : accum.concat(item),
    [],
    right
  )
}
