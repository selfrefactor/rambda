import {add, subtract, compose, map, filter, identity, inc, negate, dissoc} from 'rambda'

interface Input {
  a: string,
  b: string,
}
interface Output{
  c: string
}

describe('R.compose with explicit types', () => {
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
 
    const result = compose<Input[], AfterInput, BeforeOutput, Output>(
      (x) => ({c: x.b + 'bar'}),
      (x) => ({b: x.a + 'foo'}),
      (x) => ({a: x.a.length + x.b.length}),
    )(obj)

    result // $ExpectType Output
  })
  it('with explicit types - correct', () => {
    const obj = {
      a: 'foo',
      b: 'bar',
    }
    const result = compose<Input[], Output, Output>(identity, (input) => {
      input // $ExpectType Input
      return input as unknown as Output
    })(obj)
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
})

describe('R.compose', () => {
  it('happy', () => {
    const result = compose(subtract(11), add(1), add(1))(1)
    result // $ExpectType number
  })
  it('happy - more complex', () => {
    const result = compose((x: number) => x + 1, (x: string) => x.length+1)('foo')
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
      (list: number[]) => {
        list // $ExpectType number[]
        return list
      },
      map(add(1))
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
})

describe('R.compose - @types/ramda tests', () => {
  test('complex', () => {
    const fn = compose(
      inc,
      inc,
      inc,
      inc,
      inc,
      inc,
      inc,
      inc,
      negate,
      Math.pow,
    );
    const result = fn(3, 4);
    result // $ExpectType number
  })
})  
