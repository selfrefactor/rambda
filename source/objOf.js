import { curry } from './curry'

export function objOf(key, value) {
  if (arguments.length === 1) {
    return (_value) => objOf(key, _value)
  }
  const obj = {}
  obj[key] = value
  return obj
}
