import { path } from './path'

export function paths(pathsInput, obj){
  return pathsInput.map(singlePath => path(singlePath, obj))
}
