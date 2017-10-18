import curry from './internal/curry'

function endsWith(x,y){
  return y.endsWith(x)
}

export default curry(endsWith)