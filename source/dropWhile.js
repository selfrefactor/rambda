import { _isArray } from '../src/_internals/_isArray'

export function dropWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => dropWhile(predicate, _iterable)
  }
  const isArray = _isArray(iterable)
  if (!isArray && typeof iterable !== 'string'){
    throw new Error('`iterable` is neither list nor a string')
  }
  let flag = false
  const holder = []
  let counter = -1

  while (counter++ < iterable.length - 1){
    if (flag){
      holder.push(iterable[ counter ])
    } else if (!predicate(iterable[ counter ])){
      if (!flag) flag = true

      holder.push(iterable[ counter ])
    }
  }

  return isArray ? holder : holder.join('')
}
