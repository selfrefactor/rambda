import { map } from './map'

export function pluck(key, list){
  if (arguments.length === 1) return _list => pluck(key, _list)

  const willReturn = []

  map(val => {
    if (val[ key ] !== undefined){
      willReturn.push(val[ key ])
    }
  }, list)

  return willReturn
}
