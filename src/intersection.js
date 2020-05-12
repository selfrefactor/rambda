import { filter } from './filter'
import { includes } from './includes'

export function intersection(list1, list2){
  if (arguments.length === 1) return _list => intersection(list1, _list)

  return filter(value => includes(value, list2), list1)
}
