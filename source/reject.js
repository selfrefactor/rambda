import { filter } from './filter'

export function reject(fn, list){
  if (arguments.length === 1) return _list => reject(fn, _list)

  return filter((x, i) => !fn(x, i), list)
}
