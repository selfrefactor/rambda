import {add, subtract, pipe, map, filter, identity, dissoc} from 'rambda'
import {pipe as pipeRamda} from 'ramda'

describe('R.pipe with explicit types', () => {
  it('with explicit types - complex', () => {
    const obj: Input = {
      a: 'foo',
      b: 'bar',
    }
    interface First{
      a: number
    }
    interface Second{
      b: string
    }
    interface Output{
      c: string
    }
    /**
     * <V0, T1, must be above <T1
     *
     * @param  {any} input
     */
    const result = pipe<Input, First, Second, Output>(
      (x) => ({a: x.a.length + x.b.length}),
      (x) => ({b: x.a + 'foo'}),
      (x) => ({c: x.b + 'bar'}),
    )(obj)
    result // $ExpectType Output
  })
  it('with explicit types - correct', () => {
    const obj: Input = {
      a: 'foo',
      b: 'bar',
    }
    
    const result = pipe<Input, Output, Output>(identity, dissoc('b'))(obj)
    result // $ExpectType Output
  })
  it('with explicit types - wrong', () => {
    const obj: Input = {
      a: 'foo',
      b: 'bar',
    }

    // $ExpectError
    const result = pipe<string, number, Output>(identity, dissoc('b'))(obj)
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
    const result = pipeRamda<Output, number, string>(identity, dissoc('b'))(obj)

    result // $ExpectType number
  })
})

describe('R.pipe', () => {
  it('happy', () => {
    const result = pipe(subtract(11), add(1), add(1))(1)
    result // $ExpectType number
  })

  it('with R.filter', () => {
    const result = pipe(
      filter<number>(x => x > 2),
      map(add(1))
    )([1, 2, 3])
    result // $ExpectType number[]
  })

  it('with native filter', () => {
    const result = pipe(
      (list: number[]) => list.filter(x => x > 2),
      list => {
        list // $ExpectType number[]
        return list
      },
      map(add(1))
    )([1, 2, 3])

    result // $ExpectType number[]
  })

  it('with void', () => {
    const result = pipe(
      () => {},
      () => {}
    )()
    result // $ExpectType void
  })
})
