import {add, subtract, compose, map, filter, identity, dissoc} from 'rambda'
import {compose as composeRamda} from 'ramda'

interface Input {
  a: string,
  b: string,
}
interface Output {
  a: string,
}

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

  it('with explicit types - correct', () => {
    const obj: Input = {
      a: 'foo',
      b: 'bar',
    }
    
    const result = compose<Input, Output, Output>(identity, dissoc('b'))(obj)
    result // $ExpectType Output
  })
  it('with explicit types - wrong', () => {
    const obj: Input = {
      a: 'foo',
      b: 'bar',
    }

    // $ExpectError
    const result = compose<string, number, Output>(identity, dissoc('b'))(obj)
    result // $ExpectType number
  })
  it('with explicit types - wrong with ramda', () => {
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
    
    // $ExpectError
    const result = composeRamda<Output, number, string>(identity, dissoc('b'))(obj)

    result // $ExpectType number
  })
})
