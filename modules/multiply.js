import curry from './internal/curry'

function multiply(x,y){
  return x*y
}

export default curry(multiply)