export function dropWhile(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => dropWhile(foo, _bar);
  }

  return
}