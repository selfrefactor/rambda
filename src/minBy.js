import curry from './curry'

function minBy(fn, x, y){
  return fn(y) < fn(x) ? y : x 
}

export default curry(minBy)