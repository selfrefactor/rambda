import { mapIndexed, pipe, piped, reject } from 'rambda'

const list = [1, 2, 3]

describe('R.reject with array', () => {
  it('happy', () => {
    const result = reject(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType number[]
  })
  it('within piped', () => {
    const result = piped(
      list,
      reject(x => {
        x // $ExpectType number
        return x > 1
      }),
    )
    result // $ExpectType number[]
  })
  it('rejecting NonNullable', () => {
    const testList = [1, 2, null, undefined, 3]
    const result = piped(testList, reject(Boolean))
    result // $ExpectType (false | "" | 0 | null | undefined)[]
  })
  it('rejecting NonNullable - readonly', () => {
    const testList = [1, 2, null, undefined, 3] as const
    const result = piped(testList, reject(Boolean))
    result // $ExpectType (false | "" | 0 | null | undefined)[]
    // @ts-expect-error
    result.includes(1)
  })
  it('within pipe requires explicit type', () => {
    pipe(
      x => x,
      reject<number>(x => {
        x // $ExpectType number
        return x > 1
      }),
      reject((x: number) => {
        x // $ExpectType number
        return x > 1
      }),
    )(list)
  })
})
