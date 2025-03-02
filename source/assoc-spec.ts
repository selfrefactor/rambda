import { assoc } from 'rambda'

type Obj = {
  str: string
  num: number
}

const obj: Obj = { str: 'foo', num: 1 }
const newValue = 2
const newProp = 'num'

describe('R.assoc', () => {
  it('happy', () => {
    const result = assoc(newProp, newValue)(obj)

    result.num // $ExpectType number
    result.str // $ExpectType string
  })
})
