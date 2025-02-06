import { isNotEmpty } from 'rambda'

describe('R.isNotEmpty', () => {
  it('happy', () => {
    const readonlyArr: readonly number[] = []
    if (isNotEmpty(readonlyArr)) {
      readonlyArr // $ExpectType ReadonlyNonEmptyArray<number>
    }
    const tuple: [number, string] = [1, '1']
    if (isNotEmpty(tuple)) {
      tuple // $ExpectType [number, string]
    }

    const tuple2 = [1, 2, 3] as const
    if (isNotEmpty(tuple2)) {
      tuple2 // $ExpectType readonly [1, 2, 3]
    }
  })
})
