import curry from './internal/curry'

function join (glue, arr) {
  return arr.join(glue)
}

export default curry(join)
