import { includes } from './includes'
import { uniq } from './uniq'

export function difference(list1, list2){
  if (arguments.length === 1) return _list => difference(list1, _list)

  return uniq(list1).filter(x1 => !includes(x1, list2))
}
