import { path } from './path'

export function paths(pathsToSearch, obj){
  return pathsToSearch.map(singlePath => path(singlePath, obj))
}
