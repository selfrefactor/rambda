import {omitPaths} from 'rambda'

describe('R.omitPaths', () => {
  it('happy', () => {
    const result = omitPaths()

    result // $ExpectType number
  })
  it('curried', () => {
    const result = omitPaths()

    result // $ExpectType number
  })
})
