export function constructN(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => constructN(foo, _bar);
  }

  return
}