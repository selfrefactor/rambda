export function merge(obj, newProps) {
  if (arguments.length === 1) {
    return newPropsHolder => merge(obj, newPropsHolder)
  }

  return Object.assign({}, obj || {}, newProps || {})
}
