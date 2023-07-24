export function construct(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => construct(foo, _bar);
  }

  return
}