export function binary(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => binary(foo, _bar);
  }

  return
}