import curry from './internal/curry'
import tap from './tap'
import map from './map'

function forEach(fn, arr){
  return map(tap(fn),arr)
}

export default curry(forEach)
