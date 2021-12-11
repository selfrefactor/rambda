import {add, subtract, pipe, map, filter, identity, dissoc, inc, negate} from 'rambda'

interface Input {
  a: string,
  b: string,
}
interface Output{
  c: string
}

describe('R.pipe with explicit types', () => {
  it('with explicit types - complex', () => {
    const obj = {
      a: 'foo',
      b: 'bar',
    }
    interface AfterInput{
      a: number
    }
    interface BeforeOutput{
      b: string
    }
 
    const result = pipe<Input[], AfterInput, BeforeOutput,Output>(
      (x) => ({a: x.a.length + x.b.length}),
      (x) => ({b: x.a + 'foo'}),
      (x) => ({c: x.b + 'bar'}),
    )(obj)

    result // $ExpectType Output
  })
  it('with explicit types - correct', () => {
    const obj = {
      a: 'foo',
      b: 'bar',
    }
    
    const result = pipe<Input[], Output, Output>((input) => {
      input // $ExpectType Input
      return input as unknown as Output
    }, identity)(obj)
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
})

describe('R.pipe', () => {
  it('happy', () => {
    const result = pipe(subtract(11), add(1), add(1))(1)
    result // $ExpectType number
  })
  it('happy - more complex', () => {
    const result = pipe((x: string) => x.length+1, (x: number) => x + 1)('foo')
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
      (list: number[]) => {
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

describe('R.pipe - @types/ramda tests', () => {
  test('complex', () => {
    const fn = pipe(
      Math.pow,
      negate,
      inc,
      inc,
      inc,
      inc,
      inc,
      inc,
      inc,
      inc,
    );
    const result = fn(3, 4);
    result // $ExpectType number
  })
})  

