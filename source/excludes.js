import { includes } from './includes.js'

export function excludes(valueToFind, input){
  if (arguments.length === 1) return _input => excludes(valueToFind, _input)

  return includes(valueToFind, input) === false
}
