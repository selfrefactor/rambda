import {view, lensIndex} from 'rambda'

interface Input {
  a: number,
}
const testList: Input[] = [{a: 1}, {a: 2}, {a: 3}]

describe('R.lensIndex', () => {
  it('happy', () => {
    const result = view<Input[], Input>(lensIndex(0), testList)
    result // $ExpectType Input
    result.a // $ExpectType number
  })
})
