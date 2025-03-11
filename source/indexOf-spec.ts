import { indexOf } from 'rambda'

describe('R.indexOf', () => {
  it('happy', () => {
    const list = [{ a: 1 }, { a: 2 }]
    const result = indexOf({ a: 1 })(list)
    result // $ExpectType number
  })
})
