import { contains } from './contains'
import { reduce } from './reduce'

export function without(itemsToOmit, collection) {
  return reduce(
    (accum, item) =>
      !contains(item, itemsToOmit) ? accum.concat(item) : accum,
    [],
    collection
  )
}
