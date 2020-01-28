import { defaultTo } from './defaultTo'

export function propOr(
  defaultValue, p, obj
){
  if (arguments.length === 2) return _obj => propOr(
    defaultValue, p, _obj
  )
  if (arguments.length === 1) return (_p, _obj) => propOr(
    defaultValue, _p, _obj
  )

  if (!obj) return defaultValue

  return defaultTo(defaultValue,
    obj[ p ])
}
