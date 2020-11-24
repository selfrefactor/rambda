import {keys} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.keys', () => {
  it('happy', () => {
    const result = keys(obj)
    result // $ExpectType readonly ("b" | "a")[]
  })
})
