export function prop(key, obj){
  if (arguments.length === 1) return _obj => prop(key, _obj)

  if (!obj) return undefined

  return obj[ key ]
}
