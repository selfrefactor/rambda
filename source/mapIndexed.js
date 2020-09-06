export function mapIndexed(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => mapIndexed(foo, _bar);
  }

  return
}