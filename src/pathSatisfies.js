import { path } from './path.js'

export function pathSatisfies(fn, pathInput) {
  return obj => Boolean(fn(path(pathInput)(obj)))
}
