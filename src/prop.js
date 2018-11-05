export function prop(key, obj) {
  if (arguments.length === 1)
    return objHolder => prop(key, objHolder)

  return obj[ key ]
}
