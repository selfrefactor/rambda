import { propOr } from 'rambda'

const obj = { foo: 'bar' }
const property = 'foo'
const fallback = 'fallback'

describe('R.propOr', () => {
  it('happy', () => {
    const result = propOr(fallback, property)(obj)
    result // $ExpectType string
  })
})
