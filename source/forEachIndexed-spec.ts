import {forEachIndexed} from 'rambda'

const list = [1, 2, 3]

describe('R.forEachIndexed', () => {
  it('happy', () => {
    const result = forEachIndexed((x, i) => {
      x // $ExpectType number
      i // $ExpectType number
      console.log(x, i)
    }, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = forEachIndexed<number>((x, i) => {
      x // $ExpectType number
      i // $ExpectType number
      console.log(x, i)
    })(list)

    result // $ExpectType number[]
  })
})
