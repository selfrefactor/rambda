import contains from './contains'

export default function without(itemsToOmit, collection) {
  return collection.reduce((accum, item) => !contains(item, itemsToOmit) ? accum.concat(item) : accum, [])
}
