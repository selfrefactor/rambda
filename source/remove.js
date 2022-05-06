import { replace } from './replace.js'
import { type } from './type.js'

export function remove(inputs, text){
  if (arguments.length === 1){
    return textHolder => remove(inputs, textHolder)
  }

  if (type(text) !== 'String'){
    throw new Error(`R.remove requires string not ${ type(text) }`)
  }

  if (type(inputs) !== 'Array'){
    return replace(
      inputs, '', text
    )
  }

  let textCopy = text

  inputs.forEach(singleInput => {
    textCopy = replace(
      singleInput, '', textCopy
    ).trim()
  })

  return textCopy
}
