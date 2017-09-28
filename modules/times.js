import curry from './internal/curry'
import range from './range'
import map from './map'

function times(fn, n){
  const willReturn = []
  
  return map(
    fn,
    range(0,n)
  )
}

export default curry(times)
