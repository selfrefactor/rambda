import { addProp, createObjectFromKeys, pipe } from 'rambda'

it('R.createObjectFromKeys', () => {
  it('with "as const"', () => {
    const result = pipe(
      ['a', 'b'] as const,
      createObjectFromKeys(x => x.length),
    )
    result.a // $ExpectType number
    result.b // $ExpectType number
    // @ts-expect-error
    result.c
  })
  it('without "as const"', () => {
    const result = pipe(
      ['a', 'b'],
      createObjectFromKeys(x => x.length),
    )
    result.a // $ExpectType number
    result.b // $ExpectType number
    result.c // $ExpectType number
  })
  it('without "as const"', () => {
    const result = pipe({ a: 1, b: 'foo' }, addProp('c', 3))
    result.a // $ExpectType number
    result.b // $ExpectType number
    result.c // $ExpectType number
  })
})
