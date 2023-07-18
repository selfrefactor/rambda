import * as R from 'rambda'
import * as Ramda from 'ramda'

describe('R.addIndex', () => {
  it('happy', () => {
    function mapFn<T>(fn: (x: T) => T, list: T[]) {
      const willReturn: T[] = []
      list.forEach(item => {
        willReturn.push(fn(item))
      })

      return willReturn
    }
    const mapIndexed = R.addIndex(mapFn)
    const fn = (val: number, idx: number, list: number[]) =>
      val + idx + 5 + list[0]
    const result = mapIndexed(fn)([1, 2, 3])
    result // $ExpectType any[]
  })
  it('with Ramda.pipe', () => {
    const result = Ramda.pipe(
      Ramda.addIndex(R.map)((x: number, i: number) => {
        return x + i
      })
    )([1, 2, 3])
    result // $ExpectType unknown
  })
  it('with Rambda.pipe', () => {
    const result = R.pipe(
      R.addIndex(Ramda.map)((x: number, i: number) => {
        return x + i
      })
    )([1, 2, 3])
    result // $ExpectType any[]
  })
})
