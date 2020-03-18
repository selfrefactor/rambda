import { assoc } from './assoc'
import { curry } from './curry'
import { _isInteger } from './_internals/_isInteger'

function assocPathFn(
  list, val, input
){
  const pathArrValue = typeof list === 'string' ? list.split('.') : list
  if (pathArrValue.length === 0){
    return val
  }

  const index = pathArrValue[ 0 ]
  if (pathArrValue.length > 1){
    const condition = typeof input !== 'object' || input === null || !input.hasOwnProperty(index)

    const nextinput = condition ?
      _isInteger(parseInt(pathArrValue[ 1 ], 10)) ?
        [] :
        {} :
      input[ index ]
    val = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1), val, nextinput
    )
  }

  if (_isInteger(parseInt(index, 10)) && Array.isArray(input)){
    const arr = input.slice()
    arr[ index ] = val

    return arr
  }

  return assoc(
    index, val, input
  )
}

export const assocPath = curry(assocPathFn)
