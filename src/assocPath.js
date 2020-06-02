import { _isArray } from './_internals/_isArray'
import { _isInteger } from './_internals/_isInteger'
import { assoc } from './assoc'
import { curry } from './curry'

function assocPathFn(
  list, newValue, input
){
  const pathArrValue = typeof list === 'string' ? list.split('.') : list
  if (pathArrValue.length === 0){
    return newValue
  }

  const index = pathArrValue[ 0 ]
  if (pathArrValue.length > 1){
    const condition =
      typeof input !== 'object' ||
      input === null ||
      !input.hasOwnProperty(index)

    const nextinput = condition ?
      _isInteger(parseInt(pathArrValue[ 1 ], 10)) ?
        [] :
        {} :
      input[ index ]
    newValue = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue,
      nextinput
    )
  }

  if (_isInteger(parseInt(index, 10)) && _isArray(input)){
    const arr = input.slice()
    arr[ index ] = newValue

    return arr
  }

  return assoc(
    index, newValue, input
  )
}

export const assocPath = curry(assocPathFn)
