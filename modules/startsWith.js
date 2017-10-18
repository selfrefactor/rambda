import curry from './internal/curry'

function startsWith(str,x){
  return str.startsWith(x)
}

export default curry(startsWith)