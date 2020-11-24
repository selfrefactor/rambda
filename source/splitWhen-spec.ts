import {splitWhen} from 'rambda'

const list = [1, 2, 1, 2]
const predicate = (x: number) => x === 2

describe('R.splitWhen', () => {
  it('happy', () => {
    const result = splitWhen(predicate, list)

    result // $ExpectType readonly (readonly number[])[]
  })
  it('curried', () => {
    const result = splitWhen(predicate)(list)

    result // $ExpectType readonly (readonly number[])[]
  })
})
