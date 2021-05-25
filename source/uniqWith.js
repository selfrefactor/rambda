import { any } from './any'

export function uniqWith(predicate, list){
  if (arguments.length === 1) return _list => uniqWith(predicate, _list)

  let index = -1
  const willReturn = []

  while (++index < list.length){
    const value = list[ index ]
    const flag = any(x => predicate(value, x),
      willReturn)

    if (!flag){
      willReturn.push(value)
    }
  }

  return willReturn
}
