import { reject, pipe } from 'rambda'

const list = [1, 2, 3]

describe('R.reject with array', () => {
  it('within pipe', () => {
    const result = pipe(
      list,
      reject(x => {
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
    interface Baz extends Foo {
      c: string
    }

    const testList: (Foo | Bar | Baz)[] = [{ a: 1 }, { a: 2 }, { a: 3 }]
    const rejectBar = (x: Foo | Bar | Baz): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      reject(rejectBar),
    )
    result // $ExpectType (Foo | Baz)[]
  })
  it('narrowing type - readonly', () => {
		interface Foo {
      a: number
    }
    interface Bar extends Foo {
      b: string
    }
    interface Baz extends Foo {
      c: string
    }

    const testList: (Foo | Bar | Baz)[] = [{ a: 1 }, { a: 2 }, { a: 3 }] as const
    const rejectBar = (x: Foo | Bar | Baz): x is Bar => {
      return typeof (x as Bar).b === 'string'
    }
    const result = pipe(
      testList,
      reject(rejectBar),
    )
    result // $ExpectType (Foo | Baz)[]
  })
  it('rejecting NonNullable', () => {
    const testList = [1, 2, null, undefined, 3]
    const result = pipe(testList, reject(Boolean))
    result // $ExpectType (null | undefined)[]
  })
  it('rejecting NonNullable - readonly', () => {
    const testList = [1, 2, null, undefined, 3] as const
    const result = pipe(testList, reject(Boolean))
    result // $ExpectType (null | undefined)[]
    // @ts-expect-error
    result.includes(1)
  })
})
