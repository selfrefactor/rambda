import {isValid} from 'rambda'

describe('isValid', () => {
  it('happy', () => {
    const input = {a: ['foo', 'bar']}
    const schema = {a: ['string']}
    const result = isValid({schema, input})
    result // $ExpectType boolean
  })
})
