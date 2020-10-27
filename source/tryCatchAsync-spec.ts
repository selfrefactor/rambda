import { tryCatchAsync } from 'rambda'

describe('R.tryCatchAsync', () => {
  it('happy', () => {
    const result = tryCatchAsync()
    
    result // $ExpectType number
  })
  it('curried', () => {
    const result = tryCatchAsync()

    result // $ExpectType number
  })
})