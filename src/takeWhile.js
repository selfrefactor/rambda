import { _isArray } from '../src/_internals/_isArray'

export function takeWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => takeWhile(predicate, _iterable)
  }
  const isArray = _isArray(iterable)
  if (!isArray && typeof iterable !== 'string'){
    throw new Error('`iterable` is neither list nor a string')
  }
  let flag = true
  const holder = []
  let counter = -1

  while (counter++ < iterable.length - 1){
    if (!predicate(iterable[ counter ])){
      if (flag) flag = false
    } else if (flag){
      holder.push(iterable[ counter ])
    }
  }
  holder

  return isArray ? holder : holder.join('')
}
