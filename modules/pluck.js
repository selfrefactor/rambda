import map from './map'

export default function pluck (keyToPluck, arr) {
  if (arr === undefined) {
    return arrHolder => pluck(keyToPluck, arrHolder)
  }
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
