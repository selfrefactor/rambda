import {prepend} from 'rambda'

const list = [1, 2, 3]

describe('R.prepend', () => {
  it('happy', () => {
    const result = prepend(4, list)

    result // $ExpectType readonly number[]
  })
  it('curried', () => {
    const result = prepend(4)(list)

    result // $ExpectType readonly number[]
  })
})
