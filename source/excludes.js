import { includes } from './includes.js'

export function excludes(iterable) {
  return valueToFind => !includes(iterable)(valueToFind)
}
