import curry from './internal/curry'

function has (prop, obj) {
  return obj[ prop ] !== undefined
}

export default curry(has)
