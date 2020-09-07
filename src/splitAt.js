export function splitAt(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => splitAt(foo, _bar);
  }

  return
}