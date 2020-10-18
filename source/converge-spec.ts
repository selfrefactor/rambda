import {converge} from 'ramda'

const mult = (a: number, b: number) => {
  return a * b
}
const fn = converge(mult, [
  (a: number) => {
    return a
  },
  (a: number, b: number) => {
    return b
  },
])

describe('R.converge', () => {
  it('happy', () => {
    const result = fn(2, 3)
    const curriedResult = fn(2)(3)

    result // $ExpectType any
    curriedResult // $ExpectType any
  })
})
