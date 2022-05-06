import { curry } from './curry.js'
import { ok } from './ok.js'

function replaceAllFn(
  patterns, replacer, input
){
  ok(
    patterns, replacer, input
  )(
    Array, String, String
  )

  let text = input
  patterns.forEach(singlePattern => {
    text = text.replace(singlePattern, replacer)
  })

  return text
}

export const replaceAll = curry(replaceAllFn)
