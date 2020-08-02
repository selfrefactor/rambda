import {interpolate} from 'rambda'

const templateInput = 'foo {{x}} baz'
const templateArguments = {x: 'led zeppelin'}

describe('R.interpolate', () => {
  it('happy', () => {
    const result = interpolate(templateInput, templateArguments)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = interpolate(templateInput)(templateArguments)

    result // $ExpectType string
  })
})
