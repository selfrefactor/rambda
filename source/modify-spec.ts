import { modify } from 'rambda'

type Obj = {
  foo: string
  bar: number
}

describe('R.modify', () => {
  it('ramda tests', () => {
    const result1 = modify('foo', Number, {} as Obj)
    result1.foo // $ExpectType number
    result1.bar // $ExpectType number

    const result2 = modify('bar', String, {} as Obj)
    result2.bar // $ExpectType string
  })
})
