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
    const result = assoc(newProp, newValue, obj)

    result.num // $ExpectType number
    result.str // $ExpectType string
  })
  it('curried 1', () => {
    const result = assoc(newProp, newValue)(obj)

    result.num // $ExpectType number
    result.str // $ExpectType string
  })
  it('curried 2', () => {
    const result = assoc(newProp)(newValue)(obj)

    result.num // $ExpectType number
    result.str // $ExpectType string
  })
  it('from @types/ramda', () => {
    // @ts-expect-error
    assoc('str')(2, obj)
    // @ts-expect-error
    assoc('what')('bar', obj)

    const result1 = assoc('what')(2, {} as Record<string, number>)
    result1.what // $ExpectType number

    const result2 = assoc('str')('bar')(obj)
    result2.str // $ExpectType string
    result2.num // $ExpectType number

    // @ts-expect-error
    assoc('str')(2)(obj)
    // @ts-expect-error
    assoc('what')('foo')(obj)

    const result3 = assoc('what')(2)({} as Record<string, number>)
    result3.what // $ExpectType number

    const result4 = assoc('str', 'bar')(obj)
    result4.str // $ExpectType string
    result4.num // $ExpectType number

    assoc('str', 2)(obj)
    assoc('what', 'bar')(obj)

    const result5 = assoc('str', 2)({} as Record<string, number>)
    result5.str // $ExpectType number

    const result6 = assoc('str', 'bar', obj)
    result6.str // $ExpectType string
    result6.num // $ExpectType number

    // @ts-expect-error
    assoc('str', 2, obj)
    // @ts-expect-error

    assoc('what', 'bar', obj)

    const result7 = assoc('str', 2, {} as Record<string, number>)
    result7.str // $ExpectType number
  })
})
