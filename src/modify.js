import { curry } from './curry.js'
import { updateFn } from './update.js'
import { isIterable } from './_internals/isIterable.js'
import { _isArray } from './_internals/_isArray.js'

function modifyFn(
  property, fn, iterable
){
  if(!isIterable(iterable)) return iterable
  if(iterable[property] === undefined) return iterable
  if(_isArray(iterable)){
    return updateFn(property, fn(iterable[property]), iterable)
  }

  return {
    ...iterable,
    [ property ] : fn(iterable[ property ]),
  }
}

export const modify = curry(modifyFn)
