import { _isArray } from './_internals/_isArray.js'

export function dropLastWhile(predicate, iterable){
  if (arguments.length === 1){
    return _iterable => dropLastWhile(predicate, _iterable)
  }
  if (iterable.length === 0) return iterable
  const isArray = _isArray(iterable)

  if (typeof predicate !== 'function'){
    throw new Error(`'predicate' is from wrong type ${ typeof predicate }`)
  }
  if (!isArray && typeof iterable !== 'string'){
    throw new Error(`'iterable' is from wrong type ${ typeof iterable }`)
  }

  let found = false
  const toReturn = []
  let counter = iterable.length

  while (counter > 0){
    counter--
    if (!found && predicate(iterable[ counter ]) === false){
      found = true
      toReturn.push(iterable[ counter ])
    } else if (found){
      toReturn.push(iterable[ counter ])
    }
  }

  return isArray ? toReturn.reverse() : toReturn.reverse().join('')
}
