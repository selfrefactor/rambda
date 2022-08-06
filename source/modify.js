export function modify(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => modify(foo, _bar);
  }

  return
}