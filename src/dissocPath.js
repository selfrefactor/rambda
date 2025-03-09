import { createPath } from './_internals/createPath.js'
import { isArray } from './_internals/isArray.js'
import { omit } from './omit.js'
import { path } from './path.js'
import { cloneList } from './_internals/cloneList.js'

function update(
  index, newValue, list
){
  const clone = cloneList(list)
  if (index === -1) return clone.fill(newValue, index)

  return clone.fill(
    newValue, index, index + 1
  )
}

export function removeIndex(index, list){
  if (index <= 0) return list.slice(1)
  if (index >= list.length - 1) return list.slice(0, list.length - 1)

  return [ ...list.slice(0, index), ...list.slice(index + 1) ]
}


export function dissocPath(pathInput) {	
	return input =>{
  const pathArrValue = createPath(pathInput)
  // this {...input} spread could be done to satisfy ramda specs, but this is done on so many places
  // TODO: add warning that Rambda simply returns input if path is empty
  if (pathArrValue.length === 0) {
    return input
  }

  const pathResult = path(pathArrValue, input)
  if (pathResult === undefined) {
    return input
  }

  const index = pathArrValue[0]
  const condition =
    typeof input !== 'object' || input === null || !Object.hasOwn(input, index)
  if (pathArrValue.length > 1) {
    const nextInput = condition
      ?
        {}
      : input[index]
    const nextPathInput = Array.prototype.slice.call(pathArrValue, 1)
    const intermediateResult = dissocPath(nextPathInput, nextInput, input)
    if (isArray(input)) {
      return update(index, intermediateResult, input)
    }

    return {
      ...input,
      [index]: intermediateResult,
    }
  }
  if (isArray(input)) {
    return removeIndex(index, input)
  }

  return omit([index], input)
}
}
