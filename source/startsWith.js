import {equals} from './equals.js'
import {_isArray} from './_internals/_isArray.js'

export function startsWith(target, iterable) {
  if (arguments.length === 1)
    return _iterable => startsWith(target, _iterable)

  if (typeof iterable === 'string') {
    return iterable.startsWith(target)
  }
  if (!_isArray(target)) return false

  let correct = true
  const filtered = target.filter((x, index) => {
    if (!correct) return false
    const result = equals(x, iterable[index])
    if (!result) correct = false
    return result
  })

  return filtered.length === target.length
}
