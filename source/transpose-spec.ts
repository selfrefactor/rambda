import {transpose} from 'rambda'

const input = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
]

describe('R.transpose', () => {
  it('happy', () => {
    const result = transpose(input)

    result // $ExpectType readonly (readonly (string | number)[])[]
  })
})
