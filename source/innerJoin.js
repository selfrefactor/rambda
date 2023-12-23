export function innerJoin(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => innerJoin(foo, _bar);
  }

  return
}