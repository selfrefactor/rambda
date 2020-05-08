export function maxBy(
  compareFn, x, y
){
  if (arguments.length === 2){
    return _y => maxBy(
      compareFn, x, _y
    )
  } else if (arguments.length === 1){
    return (_x, _y) => maxBy(
      compareFn, _x, _y
    )
  }

  return compareFn(y) > compareFn(x) ? y : x
}
