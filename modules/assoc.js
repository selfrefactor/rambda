import curry from './curry'

function assoc (prop, value, obj) {
  return Object.assign({}, obj, {[prop]: value})
}

export default curry(assoc)