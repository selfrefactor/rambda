import { _lastIndexOf } from './equals.js'

export function lastIndexOf(valueToFind) {
  return list => _lastIndexOf(valueToFind, list)
}
