import { curry } from './curry'
import { defaultTo } from './defaultTo'
import { view } from './view'

function viewOrFn(
  fallback, lens, input
){
  return defaultTo(fallback, view(lens, input))
}

export const viewOr = curry(viewOrFn)
