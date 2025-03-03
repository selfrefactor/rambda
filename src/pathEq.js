import { equals } from './equals.js'
import { path } from './path.js'

export function pathEq(pathToSearch, target) {
  return input =>  equals(path(pathToSearch, input), target)
}

