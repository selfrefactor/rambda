import { curry } from './curry'

function assocRaw(prop, value, obj) {
  return Object.assign({}, obj, { [ prop ] : value })
}

export const assoc = curry(assocRaw)
