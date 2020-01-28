export function minBy(
  fn, a, b
){
  if (arguments.length === 2){
    return _b => minBy(
      fn, a, _b
    )
  } else if (arguments.length === 1){
    return (_a, _b) => minBy(
      fn, _a, _b
    )
  }

  return fn(b) < fn(a) ? b : a
}
