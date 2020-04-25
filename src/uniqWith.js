import { any } from './any'

export function uniqWith(fn, list){
  if (arguments.length === 1) return _list => uniqWith(fn, _list)

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]
    const flag = any(willReturnInstance => fn(value, willReturnInstance),
      willReturn)

    if (!flag){
      willReturn.push(value)
    }
  }

  return willReturn
}
