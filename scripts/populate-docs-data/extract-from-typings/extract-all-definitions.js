import { head, init, mapToObject, match, piped, remove, trim } from 'rambdax'

import { getOrigin, wayTooLongTypings } from '../../utils'

export function extractAllDefinitions(withRambdax){
  const matches = match(/\/\/\s@SINGLE_MARKER\nexport\sfunction.([^*])+/gm,
    getOrigin(withRambdax)).map(init)

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

    const methodTypings = remove(/export\sfunction\s/g, allTypings)
    const partialReturn = { [ name ] : methodTypings }

    if (!wayTooLongTypings.includes(name)) return partialReturn

    const [ firstPart ] = methodTypings.split('\n\n')

    return { [ name ] : firstPart }
  }, matches)

  return result
}
