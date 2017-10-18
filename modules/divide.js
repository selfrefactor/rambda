import curry from './internal/curry'

function divide(x,y){
  return x/y
}

export default curry(divide)