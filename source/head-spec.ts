import { describe, expectTypeOf, it } from 'vitest'
import { head, last } from 'rambda'

export const mixedList = [1, 'foo', 3, 'bar']
export const mixedListConst = [1, 'foo', 3, 'bar'] as const
export const numberList = [1, 2, 3]
export const numberListConst = [1, 2, 3] as const
export const emptyList = []
export const emptyString = ''
export const string = 'foo'

describe('R.head', () => {
  it('string', () => {
    expectTypeOf(head(string)).toEqualTypeOf<string>()
    expectTypeOf(last(string)).toEqualTypeOf<string>()
  })

  it('empty string', () => {
    expectTypeOf(head(emptyString)).toEqualTypeOf<string>()
    expectTypeOf(last(emptyString)).toEqualTypeOf<string>()
  })

  it('array', () => {
    expectTypeOf(head(numberList)).toEqualTypeOf<number>()
    expectTypeOf(head(numberListConst)).toEqualTypeOf<1>()

    expectTypeOf(last(numberList)).toEqualTypeOf<number>()
    expectTypeOf(last(numberListConst)).toEqualTypeOf<3>()
  })

  it('empty array', () => {
    const list = [] as const
    expectTypeOf(head(emptyList)).toEqualTypeOf<never>()
    expectTypeOf(head(list)).toEqualTypeOf<undefined>()
    expectTypeOf(last(emptyList)).toEqualTypeOf<never>()
    expectTypeOf(last(list)).toEqualTypeOf<undefined>()
  })

  it('mixed', () => {
    expectTypeOf(head(mixedList)).toEqualTypeOf<string | number>()
    expectTypeOf(head(mixedListConst)).toEqualTypeOf<1>()
    expectTypeOf(last(mixedList)).toEqualTypeOf<string | number>()
    expectTypeOf(last(mixedListConst)).toEqualTypeOf<'bar'>()
  })
})
