import {curry} from './curry'
import {view} from './view'
import {defaultTo} from './defaultTo'

function viewOrFn(fallback, lens, input){
  return defaultTo(fallback,view(lens, input))
}

export const viewOr = curry(viewOrFn)