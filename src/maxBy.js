export function maxBy(
  fn, a, b
){
  if (arguments.length === 2){
    return _b => maxBy(
      fn, a, _b
    )
  } else if (arguments.length === 1){
    return (_a, _b) => maxBy(
      fn, _a, _b
    )
  }

  return fn(b) > fn(a) ? b : a
}
