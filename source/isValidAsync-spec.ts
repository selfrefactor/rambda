import {isValidAsync} from 'rambda'

describe('R.isValidAsync', () => {
  it('happy', async() => {
    const input = {a: ['foo', 'bar']}
    const schema = {a: ['string']}
    const result = await isValidAsync({schema, input})
    result // $ExpectType boolean
  })
})
