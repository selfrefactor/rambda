export function comparator(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => comparator(foo, _bar);
  }

  return
}