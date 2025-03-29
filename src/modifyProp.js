import { isArray } from './_internals/isArray.js'
import { update } from './update.js'

function modifyFn(property, fn, list) {
  if (list[property] === undefined) {
    return list
  }
  if (isArray(list)) {
    return update(property, fn(list[property]))(list)
  }

  return {
    ...list,
    [property]: fn(list[property]),
  }
}

export function modifyProp(property, fn) {
  return obj => modifyFn(property, fn, obj)
}
