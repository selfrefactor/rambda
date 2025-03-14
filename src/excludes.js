import { includes } from './includes.js'

export function excludes(valueToFind) {
  return iterable => !includes(valueToFind)(iterable)
}
