import type from './type'

export default function isNil (x) {
  return type(x) === 'Undefined' || type(x) === 'Null'
}
