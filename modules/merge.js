export default function merge (obj, newProps) {
  if (newProps === undefined) {
    return newPropsHolder => merge(obj, newPropsHolder)
  }

  return Object.assign({}, obj, newProps)
}
