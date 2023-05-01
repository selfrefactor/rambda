import { pathFn } from './path.js'

export const removePath = (object, path) => {
  const pathResult = pathFn(path, object)
  if (pathResult === undefined) return object
  if (!path.length) return object

  const [ head, ...tail ] = path
  if (tail.length === 0){
    const { [ head ]: _, ...rest } = object

    return rest
  }

  if (!object[ head ]) return object

  return {
    ...object,
    [ head ] : removePath(object[ head ], tail),
  }
}

export function omitPaths(paths, obj){
  if (arguments.length === 1){
    return _obj => omitPaths(paths, _obj)
  }

  return paths.reduce((result, path) => {
    const pathParts = path.split('.')

    return removePath(result, pathParts)
  }, obj)
}
