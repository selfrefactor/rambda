import { head, mapToObject, match, piped, remove, trim } from 'rambdax'

import * as R from '../../../rambda'
import { ORIGIN } from '../constants'

export function extractDefinition(){
  const rambdaMethods = Object.keys(R)
  const matches = match(/\/\/ @SINGLE_MARKER\nexport function[^;]+/gm,
    ORIGIN)

  const result = mapToObject(singleMatch => {
    const typing = remove('// @SINGLE_MARKER', singleMatch)

    const name = piped(
      typing,
      match(/export function [a-zA-Z]+/),
      head,
      trim,
      remove('export function ')
    )
    if (!rambdaMethods.includes(name)) return false
    const partialReturn = { [ name ] : remove('export function ', typing) }

    return partialReturn
  }, matches)

  return result
}
