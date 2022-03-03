import { on } from 'rambda'

const binaryFn = (a: number, b: number) => a === b
const unaryFn = (x: {a: number}) => x.a
const a = {
  b : 0,
  a : 1,
}
const b = { a : 1 }

describe('R.on', () => {
  it('happy', () => {
    const result = on(
      binaryFn, unaryFn, a, b
    )
    
    result // $ExpectType boolean
  })
})
