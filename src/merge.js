export function merge(target) {
  return objectWithNewProps =>
    Object.assign({}, target || {}, objectWithNewProps || {})
}
