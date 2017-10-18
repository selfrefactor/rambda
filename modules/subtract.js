import curry from './internal/curry'

function subtract(x,y){
  return x-y
}

export default curry(subtract)