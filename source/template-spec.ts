import {template} from 'rambda'

const templateInput = 'foo {{x}} baz'
const templateArguments = {x: 'led zeppelin'}

describe('R.template', () => {
  it('happy', () => {
    const result = template(templateInput, templateArguments)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = template(templateInput)(templateArguments)

    result // $ExpectType string
  })
})
