import { map } from './map'

export function pluck(keyToPluck, arr) {
  if (arguments.length === 1)
    return arrHolder => pluck(keyToPluck, arrHolder)

  const willReturn = []

  map(val => {
    if (!(val[ keyToPluck ] === undefined)) {
      willReturn.push(val[ keyToPluck ])
    }
  }, arr)

  return willReturn
}
