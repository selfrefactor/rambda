export default function prop (key, obj) {
  if (obj === undefined) {
    return objHolder => prop(key, objHolder)
  }

  return obj[ key ]
}
