import {on} from 'rambda'

const binaryFn = (a: number, b: number) => a === b
const unaryFn = (x: {a: number}) => x.a
const a = {
  b: 0,
  a: 1,
}
const b = {a: 1}

describe('R.on', () => {
  it('with boolean as result', () => {
    const result = on(binaryFn, unaryFn, a, b)

    result // $ExpectType boolean
  })
  it('with number as result', () => {
    const result = on((a: number, b: number) => a + b, unaryFn, a, b)

    result // $ExpectType number
  })
})
