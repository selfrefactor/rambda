import curry from './internal/curry'

function split (glue, str) {
  return str.split(glue)
}

export default curry(split)
