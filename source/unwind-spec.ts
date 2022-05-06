import {unwind} from 'rambda'

interface Input {
  a: number,
  b: number[],
}
interface Output {
  a: number,
  b: number,
}

describe('R.unwind', () => {
  it('happy', () => {
    const obj = {
      a: 1,
      b: [2, 3],
    }
    const result = unwind<Input, Output>('b', obj)

    result // $ExpectType Output[]
  })
})
