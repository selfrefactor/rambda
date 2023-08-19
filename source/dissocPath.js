import { createPath } from '../src/_internals/createPath.js'
import { isArray } from './_internals/isArray.js'
import { isInteger } from './_internals/isInteger.js'
import { omit } from './omit.js'
import { path } from './path.js'
import { update } from './update.js'

export function dissocPath(pathInput, inputObject){
  if (arguments.length === 1) return _obj => dissocPath(pathInput, _obj)

  const pathArrValue = createPath(pathInput)
  if (pathArrValue.length === 0) return inputObject

  const pathResult = path(pathArrValue, inputObject)
  if (pathResult === undefined) return inputObject

  const index = pathArrValue[ 0 ]
  const condition =
    typeof inputObject !== 'object' ||
    inputObject === null ||
    !inputObject.hasOwnProperty(index)
  if (pathArrValue.length > 1){
    const nextInput = condition ?
      isInteger(pathArrValue[ 1 ]) ?
        [] :
        {} :
      inputObject[ index ]
    const nextPathInput = Array.prototype.slice.call(pathArrValue, 1)
    const x = dissocPath(
      nextPathInput, nextInput, inputObject
    )
    if (isArray(inputObject))
      return update(
        index, x, inputObject
      )

    return {
      ...inputObject,
      [ index ] : x,
    }
  }

  return omit(index, inputObject)
}
