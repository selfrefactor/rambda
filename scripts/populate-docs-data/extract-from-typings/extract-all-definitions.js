import { head, mapToObject, match, piped, remove, trim } from 'rambdax'

import * as R from '../../../rambda'
import { getOrigin, wayTooLongTypings } from '../constants'

export function extractAllDefinitions(withRambdax){
  const rambdaMethods = Object.keys(R)
  const matches = match(/\/\/\s@SINGLE_MARKER\n(export\sfunction.+|\n)+/gm,
    getOrigin(withRambdax))

  const result = mapToObject(singleMatch => {
    const allTypings = piped(
      singleMatch, remove('// @SINGLE_MARKER'), trim
    )

    const name = piped(
      allTypings,
      match(/export function [a-zA-Z]+/),
      head,
      trim,
      remove('export function ')
    )
    if (!rambdaMethods.includes(name)) return false

    const methodTypings = remove(/export\sfunction\s/g, allTypings)
    const partialReturn = { [ name ] : methodTypings }

    if (!wayTooLongTypings.includes(name)) return partialReturn

    const [ firstPart ] = methodTypings.split('\n\n')

    return { [ name ] : firstPart }
  }, matches)

  return result
}
