export function collectBy(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => collectBy(foo, _bar);
  }

  return
}