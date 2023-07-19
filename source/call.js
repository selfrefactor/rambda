export function call(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => call(foo, _bar);
  }

  return
}