import { path } from './path'

function indexByPath(pathInput, list){
  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ path(pathInput, item) ] = item
  }

  return toReturn
}

export function indexBy(fnOrPath, list){
  if (arguments.length === 1){
    return _list => indexBy(fnOrPath, _list)
  }

  if (typeof fnOrPath === 'string'){
    return indexByPath(fnOrPath, list)
  }

  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ fnOrPath(item) ] = item
  }

  return toReturn
}
