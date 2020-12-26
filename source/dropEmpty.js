export function dropEmpty(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => dropEmpty(foo, _bar);
  }

  return
}