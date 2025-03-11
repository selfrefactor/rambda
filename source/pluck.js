import { map } from './map.js'

export function pluck(property) {
	return list => {
  const willReturn = []

  map(x => {
    if (x[property] !== undefined) {
      willReturn.push(x[property])
    }
  }, list)

  return willReturn
}
}
