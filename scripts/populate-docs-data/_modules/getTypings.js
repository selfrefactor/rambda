import { head, mapToObject, match, piped, remove, trim } from 'rambdax'
const { readFileSync } = require('fs')
const { resolve } = require('path')

export function getTypings(){
  const path = resolve(__dirname, '../../../files/index.d.ts')
  const content = readFileSync(path).toString()
  const matches = match(/\/\/ SINGLE_MARKER\nexport function[^;]+/gm, content)

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
