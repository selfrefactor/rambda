import { createPath } from './_internals/createPath.js'
import { path as pathModule } from './path.js'

function assoc(prop, newValue) {
  return obj => Object.assign({}, obj, { [prop]: newValue })

export function modifyPath(pathInput, fn) {
  return object => {
    const path = createPath(pathInput)
    if (path.length === 1) {
      return {
        ...object,
        [path[0]]: fn(object[path[0]]),
      }
    }
    if (pathModule(path)(object) === undefined) {
      return object
    }

    const val = modifyPath(Array.prototype.slice.call(path, 1), fn, object[path[0]])
    if (val === object[path[0]]) {
      return object
    }

    return assoc(path[0], val)(object)
  }
}
