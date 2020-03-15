export function is(ctor, val){
  if (arguments.length === 1) return _val => is(ctor, _val)

  return (
    val != null && val.constructor === ctor ||
    val instanceof ctor
  )
}
