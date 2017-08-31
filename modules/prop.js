import curry from './internal/curry'

function prop (key, obj) {
  return obj[ key ]
}

export default curry(prop)
