import curry from './internal/curry'

function modulo(x,y){
  return x%y
}

export default curry(modulo)