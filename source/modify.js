import {curry} from './curry.js'

function modifyFn(property, fn, obj) {
  return {
    ...obj,
    [property]: fn(obj[property])
  }
}

export const modify = curry(modifyFn)
