import { filter } from './filter'
import { includes } from './includes'

export function intersection(listA, listB){
  if (arguments.length === 1) return _list => intersection(listA, _list)

  return filter(value => includes(value, listB), listA)
}
