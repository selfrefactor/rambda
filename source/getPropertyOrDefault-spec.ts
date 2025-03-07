import { getPropertyOrDefault } from 'rambda'

const obj = { foo: 'bar' }
const property = 'foo'
const fallback = 'fallback'

describe('R.getPropertyOrDefault', () => {
  it('happy', () => {
    const result = getPropertyOrDefault(fallback, property)(obj)
    result // $ExpectType string
  })
})
