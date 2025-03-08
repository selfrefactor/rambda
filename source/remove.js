import { replace } from './replace.js'
import { isArray } from './_internals/isArray.js'

export function remove(inputs) {
	return text => {

  if (!isArray(inputs)) {
    return replace(inputs, '')(text)
  }

  let textCopy = text

  inputs.forEach(singleInput => {
    textCopy = replace(singleInput, '')(textCopy)
  })

  return textCopy
}
}
