import { createPath } from './_internals/createPath.js'
import { assocPathFn } from './assocPath.js'
import { path as pathModule } from './path.js'
const ALLOWED_OPERATIONS = [ 'remove', 'add', 'update' ]

export function removeAtPath(path, obj){
  const p = createPath(path)

  const len = p.length
  if (len === 0) return
  if (len === 1) return delete obj[ p[ 0 ] ]
  if (len === 2) return delete obj[ p[ 0 ] ][ p[ 1 ] ]
  if (len === 3) return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ]
  if (len === 4) return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ]
  if (len === 5) return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ]
  if (len === 6)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ]

  if (len === 7)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ]

  if (len === 8)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ][ p[ 7 ] ]

  if (len === 9)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ][ p[ 7 ] ][ p[ 8 ] ]

  if (len === 10)
    return delete obj[ p[ 0 ] ][ p[ 1 ] ][ p[ 2 ] ][ p[ 3 ] ][ p[ 4 ] ][ p[ 5 ] ][ p[ 6 ] ][ p[ 7 ] ][ p[ 8 ] ][
      p[ 9 ]
    ]

}

export function applyDiff(rules, obj){
  if (arguments.length === 1) return _obj => applyDiff(rules, _obj)

  let clone = { ...obj }

  rules.forEach(({ op, path, value }) => {
    if (!ALLOWED_OPERATIONS.includes(op)) return
    if (op === 'add' && path && value !== undefined){
      if (pathModule(path, obj)) return

      clone = assocPathFn(
        path, value, clone
      )

      return
    }

    if (op === 'remove'){
      if (pathModule(path, obj) === undefined) return

      removeAtPath(path, clone)

      return
    }
    if (op === 'update' && path && value !== undefined){
      if (pathModule(path, obj) === undefined) return

      clone = assocPathFn(
        path, value, clone
      )

    }
  })

  return clone
}
