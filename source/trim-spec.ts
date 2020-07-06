import {trim} from 'rambda'

describe('R.trim', () => {
  it('happy', () => {
    const result = trim('foo  ')

    result // $ExpectType string
  })
})
