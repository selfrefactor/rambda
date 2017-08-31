import curry from './internal/curry'
import map from './map'

function pluck (keyToPluck, arr) {
  const willReturn = []
  map(
    val => {
      if (!(val[ keyToPluck ] === undefined)) {
        willReturn.push(val[ keyToPluck ])
      }
    },
    arr
  )

  return willReturn
}

export default curry(pluck)
