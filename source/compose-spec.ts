import {add, subtract, compose, map, filter} from 'rambda'
import {compose as composeRamda} from 'ramda'

describe('R.compose', () => {
  it('happy', () => {
    const result = compose(subtract(11), add(1), add(1))(1)
    result // $ExpectType number
  })

  it('with R.filter', () => {
    const result = compose(
      filter<number>(x => x > 2),
      map(add(1))
    )([1, 2, 3])
    result // $ExpectType number[]
  })

  it('with native filter', () => {
    const result = compose(
      (list: number[]) => list.filter(x => x > 2),
      list => {
        list // $ExpectType any
        return list
      },
      map(add(1))
    )([1, 2, 3])

    const ramdaResult = composeRamda(
      (list: number[]) => list.filter(x => x > 2),
      // $ExpectError
      list => {
        list // $ExpectType unknown
        return list
      },
      map(add(1))
      // $ExpectError
    )([1, 2, 3])

    result // $ExpectType number[]
    ramdaResult // $ExpectType number[]
  })

  it('with void', () => {
    const result = compose(
      () => {},
      () => {}
    )()
    result // $ExpectType void
  })
})
