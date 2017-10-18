import curry from './internal/curry'

function startsWith(x,y){
  return y.startsWith(x)
}

export default curry(startsWith)