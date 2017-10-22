import contains from './contains'
import reduce from './reduce'

export default function without (itemsToOmit, collection) {
  return reduce(
    (accum, item) => !contains(item, itemsToOmit) ? accum.concat(item) : accum,
    [],
    collection
  )
}
