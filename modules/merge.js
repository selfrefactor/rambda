import curry from './internal/curry'

function merge (obj, newProps) {
  return Object.assign({}, obj, newProps)
}

export default curry(merge)
