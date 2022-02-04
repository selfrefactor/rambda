export function flattenObject(foo, bar) {
  if (arguments.length === 1){
    return (_bar) => flattenObject(foo, _bar);
  }

  return
}