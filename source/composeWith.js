export function composeWith(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => composeWith(foo, _bar);
  }

  return
}