import { filter, mergeTypes, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.filter with array', () => {
  it('within pipe', () => {
    const result = pipe(
      list,
      filter(x => {
        x // $ExpectType number
        return x > 1
      }),
    )
    result // $ExpectType number[]
  })
  it('narrowing type', () => {
    interface Foo {
      a: number
    }
    interface Bar extends Foo {
      b: string
    }
		type T = Foo | Bar
    const testList: T[]= [{ a: 1 }, { a: 2 }, { a: 3 }] 
    const filterBar = (x: T): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      filter(filterBar),
    )
    result // $ExpectType Bar[]
  })
  it('narrowing type - readonly', () => {
    interface Foo {
      a: number
    }
    interface Bar extends Foo {
      b: string
    }
		type T = Foo | Bar
    const testList: T[]= [{ a: 1 }, { a: 2 }, { a: 3 }] as const
    const filterBar = (x: T): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      filter(filterBar),
    )
    result // $ExpectType Bar[]
  })
  it('filtering NonNullable', () => {
    const testList = [1, 2, null, undefined, 3]
    const result = pipe(testList, filter(Boolean))
    result // $ExpectType number[]
  })
  it('filtering NonNullable - readonly', () => {
    const testList = [1, 2, null, undefined, 3] as const
    const result = pipe(testList, filter(Boolean))
    result.includes(1)
    // @ts-expect-error
    result.includes(4)
    // @ts-expect-error
    result.includes(undefined) 
    // @ts-expect-error
    result.includes(null)
  })
})
