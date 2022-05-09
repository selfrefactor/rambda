import { curry } from './curry.js'
import { defaultTo } from './defaultTo.js'
import { view } from './view.js'

function viewOrFn(
  fallback, lens, input
){
  return defaultTo(fallback, view(lens, input))
}

export const viewOr = curry(viewOrFn)
