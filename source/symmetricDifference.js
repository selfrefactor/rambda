import { concat } from './concat'
import { filter } from './filter'
import { includes } from './includes'

export function symmetricDifference(list1, list2){
  if (arguments.length === 1) return _list => symmetricDifference(list1, _list)

  return concat(filter(value => !includes(value, list2), list1),
    filter(value => !includes(value, list1), list2))
}
