import { createPath } from './_internals/createPath.js'
import { assocPath } from './assocPath.js'
import { path as pathModule } from './path.js'

function removeProperty(prop, obj){
  const toReturn = {}

  Object.keys(obj).forEach(key => {
    if (key === prop) return
    toReturn[ key ] = obj[ key ]
  })

  return toReturn
}

export function deletePath(pathInput, obj){
  if (arguments.length === 1){
    return _obj => deletePath(pathInput, _obj)
  }
  const path = createPath(pathInput)
  if (path.length === 0){
    return obj
  }
  if (path.length === 1){
    return removeProperty(path[ 0 ], obj)
  }
  const lastIndex = path.length - 1
  const newPath = path.filter((item, i) => i !== lastIndex)
  const found = pathModule(newPath, obj)
  if (!found) return obj

  const newValue = deletePath(path[ lastIndex ], found)

  return assocPath(
    newPath, newValue, obj
  )
}
