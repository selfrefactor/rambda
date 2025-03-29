import { intersperse } from 'rambda'

describe('R.intersperse', () => {
  it('curried', () => {
    const result = intersperse('|')(['foo', 'bar'])
    result // $ExpectType string[]
  })
})
