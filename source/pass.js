import { any } from './any.js'
import { check } from './ok.js'

export function pass(...inputs){
  return (...schemas) =>
    any((x, i) => {
      const schema = schemas[ i ] === undefined ? schemas[ 0 ] : schemas[ i ]

      return !check(x, schema)
    }, inputs) === false
}
