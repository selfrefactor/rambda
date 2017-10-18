import curry from './internal/curry'

function endsWith(str,x){
  return str.endsWith(x)
}

export default curry(endsWith)