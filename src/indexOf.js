import { _indexOf } from './equals.js'

export function indexOf(valueToFind) {
  return list => _indexOf(valueToFind, list)
}
