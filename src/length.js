import {_isArray} from './_internals/_isArray'

export function length(x) {
  if (_isArray(x)) return x.length
  if (typeof x === 'string') return x.length

  return NaN
}
