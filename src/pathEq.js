import { curry } from './curry'
import { equals } from './equals'
import { path } from './path'

function pathEqFn(
  pathToSearch, target, input
){
  return equals(path(pathToSearch, input), target)
}

export const pathEq = curry(pathEqFn)
