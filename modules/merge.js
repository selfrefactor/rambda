function merge(obj, newProps) {
  if (newProps === undefined) {
    return holder => merge(obj, holder)
  }

  return Object.assign({}, obj, newProps)
}

module.exports = merge
