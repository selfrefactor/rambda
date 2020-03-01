const Identity = x => ({
  x,
  map : fn => Identity(fn(x)),
})

export function over(
  lens, fn, object
){
  if (arguments.length === 1)
    return (_fn, _object) => over(
      lens, _fn, _object
    )
  if (arguments.length === 2)
    return _object => over(
      lens, fn, _object
    )

  return lens(x => Identity(fn(x)))(object).x
}
