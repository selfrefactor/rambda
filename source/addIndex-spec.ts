import {addIndex, map, pipe} from 'rambda'

describe('R.addIndex', () => {
  it('happy', () => {
    function mapFn<T>(fn: (x: T) => T, list: T[]) {
      const willReturn: T[] = []
      list.forEach(item => {
        willReturn.push(fn(item))
      })

      return willReturn
    }
    const mapIndexed = addIndex(mapFn)
    const fn = (val: number, idx: number, list: number[]) =>
      val + idx + 5 + list[0]
    const result = mapIndexed(fn)([1, 2, 3])
    result // $ExpectType any[]
  })
  it('with pipe', () => {
    const result = pipe(
      addIndex(map)((x: number, i: number) => {
        return x + i
      })
    )([1, 2, 3])
    result // $ExpectType any[]
  })
})
