import {flatten} from 'rambda'

describe('flatten', () => {
  it('happy', () => {
    const result = flatten<number>([1, 2, [3, [4]]])
    result // $ExpectType readonly number[]
  })
})
