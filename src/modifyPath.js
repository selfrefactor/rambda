import { createPath } from './_internals/createPath.js'
import { path as pathModule } from './path.js'

function assoc(prop, newValue) {
  return obj => Object.assign({}, obj, { [prop]: newValue })
}

function modifyPathFn(pathInput, fn, obj) {
  const path = createPath(pathInput)
  if (path.length === 1) {
    return {
      ...obj,
      [path[0]]: fn(obj[path[0]]),
    }
  }
  if (pathModule(path)(obj) === undefined) {
    return obj
  }

  const val = modifyPathFn(Array.prototype.slice.call(path, 1), fn, obj[path[0]])
  if (val === obj[path[0]]) {
    return obj
  }

  return assoc(path[0], val)(obj)
}

export function modifyPath(pathInput, fn) {
  return obj => modifyPathFn(pathInput, fn, obj)
}
