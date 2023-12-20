export function reduceBy(foo, bar){
  if (arguments.length === 1)
    return _bar => reduceBy(foo, _bar)

}
