import { path } from './path.js'

export function hasPath(pathInput) {
  return obj => path(pathInput, obj) !== undefined
}
