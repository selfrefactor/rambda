import * as R from 'ramda'
import {flip, subtract} from 'rambda'

describe('R.flip', () => {
  it('function with arity of 2', () => {
    const subtractFlipped = flip(subtract)
    const result = subtractFlipped(1, 7)
    const curriedResult = subtractFlipped(1)(7)
    curriedResult // $ExpectType number

    // This is wrong
    // ============================================
    result // $ExpectType (y: number) => number
  })
})

describe('Ramda.flip', () => {
  it('function with arity of 2', () => {
    const subtractFlipped = R.flip(R.subtract)
    const result = subtractFlipped(1, 7)
    const curriedResult = subtractFlipped(1)(7)
    curriedResult // $ExpectType number

    // This is wrong
    // ============================================
    result // $ExpectType (b: number) => number
  })
})
