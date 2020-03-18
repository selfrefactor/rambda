import _objectIs from './_internals/_objectIs'

export function identical(a, b){
  if (arguments.length === 1) return _b => identical(a, _b)

  return _objectIs(a, b)
}
