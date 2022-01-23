import {modifyPath} from 'rambda'

const obj = {a:{b: {c:1}}}

describe('R.modifyPath', () => {
  it('happy', () => {
    const result = modifyPath(compareFn, first, second)
    result // $ExpectType 1 | 2
  })
})
