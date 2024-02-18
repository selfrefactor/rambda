import {lt} from 'rambda'

describe('R.lt', () => {
  it('happy', () => {
    const result = lt(1, 2)
    const curriedResult = lt(2)(3)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
