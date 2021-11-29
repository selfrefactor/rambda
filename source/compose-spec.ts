import {add, subtract, compose, map, filter, identity, dissoc} from 'rambda'
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
        list // $ExpectType number[]
        return list
      },
      map(add(1))
    )([1, 2, 3])

    result // $ExpectType number[]
  })

  it('with native filter - ramda', () => {
    const result = composeRamda(
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
  })

  it('with void', () => {
    const result = compose(
      () => {},
      () => {}
    )()
    result // $ExpectType void
  })

  it('with explicit types', () => {
    interface Input {
      a: string,
      b: string,
    }
    const obj: Input = {
      a: 'foo',
      b: 'bar',
    }
    interface Output {
      a: string,
    }
    
    const result = compose<Input, Input, Output>(identity, dissoc('b'))(obj)

    result // $ExpectType Output
  })
})
