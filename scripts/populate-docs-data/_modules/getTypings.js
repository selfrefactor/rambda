import { head, mapToObject, match, piped, remove, trim } from 'rambdax'

import { TYPINGS } from '../constants'

export function getTypings(){
  const matches = match(/\/\/ SINGLE_MARKER\nexport function[^;]+/gm, TYPINGS)

  return mapToObject(singleMatch => {
    const typing = remove('// SINGLE_MARKER', singleMatch)

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
