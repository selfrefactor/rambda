import curry from './internal/curry'

function includes(x,y){
  return y.includes(x)
}

export default curry(includes)