import {assoc} from 'rambda'

const obj = {a: 1}
const newValue = 2
const newProp = 'b'

describe('R.assoc', () => {
  it('happy', () => {
    const result = assoc(newProp, newValue, obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('curried 1', () => {
    const result = assoc(newProp, newValue)(obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('curried 2', () => {
    const result = assoc(newProp)(newValue)(obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
})
