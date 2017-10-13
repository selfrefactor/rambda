import curry from './internal/curry'

function add(x,y){
  return x+y
}

export default curry(add)