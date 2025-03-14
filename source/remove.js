import { isArray } from './_internals/isArray.js'
import { replace } from './replace.js'

export function remove(inputs) {
  return text => {
    if (!isArray(inputs)) {
      return replace(inputs, '')(text)
    }

    let textCopy = text

    inputs.forEach(singleInput => {
      textCopy = (replace(singleInput, '')(textCopy)).trim()
    })

    return textCopy
  }
}
