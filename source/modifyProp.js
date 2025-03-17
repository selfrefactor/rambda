import { isArray } from './_internals/isArray.js'
import { updateFn } from './update.js'

function modifyFn(
  property, fn, list
){
  if (list[ property ] === undefined) return list
  if (isArray(list)){
    return updateFn(
      property, fn(list[ property ]))(list
    )
  }

  return {
    ...list,
    [ property ] : fn(list[ property ]),
  }
}

export function modify (property, fn){
	return obj => modifyFn(property, fn, obj)
}

