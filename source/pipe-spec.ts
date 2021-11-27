import {add, subtract, pipe, map, filter, identity, dissoc} from 'rambda'

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
    
    const result = pipe<Input, Input, Output>(identity, dissoc('b'))(obj)

    result // $ExpectType Output
  })
})
