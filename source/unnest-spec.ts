import {unnest} from 'rambda'

const list = [1, [2], [[3]]]

describe('R.unnest', () => {
  it('without passing type', () => {
    const result = unnest(list)

    result // $ExpectType unknown[]
  })
  it('with passing type', () => {
    const result = unnest<[number, number, number[]]>([1, [2], [[3]]])

    result // $ExpectType [number, number, number[]
  })
})
