import { head, mapToObject, match, piped, remove, trim } from 'rambdax'

import { ORIGIN } from '../constants'

export function extractDefinition(){
  const matches = match(/\/\/ @SINGLE_MARKER\nexport function[^;]+/gm, ORIGIN)

  return mapToObject(singleMatch => {
    const typing = remove('// @SINGLE_MARKER', singleMatch)

    const name = piped(
      typing,
      match(/export function [a-zA-Z]+/),
      head,
      trim,
      remove('export function ')
    )

    return { [ name ] : remove('export function ', typing) }
  }, matches)
}
