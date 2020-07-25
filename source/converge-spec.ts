import {converge} from 'rambda'

const mult = function (a: number, b: number){
  return a * b
}
const fn = converge(mult, [
  function (a: number){
    return a
  },
  function (a: number, b: number){
    return b
  },
])

describe('R.converge', () => {
  it('happy', () => {
    const result = fn(2,3)
    const curriedResult = fn(2)(3)

    result // $ExpectType any
    curriedResult // $ExpectType any
  })
})
