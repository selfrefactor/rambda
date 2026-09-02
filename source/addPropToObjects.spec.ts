import { pipe } from './pipe'
import { addPropToObjects } from './addPropToObjects'

test('R.addPropToObjects', () => {
  let result = pipe(
    [
      {a: 1, b: 2},
      {a: 3, b: 4},
    ],
    addPropToObjects(
      'c',
      (x: { a: number; b: number }) => String(x.a + x.b),
    )
  )
  expectTypeOf(result).toEqualTypeOf<{ a: number; b: number; c: string }[]>()
  expect(result).toEqual([
    { a: 1, b: 2, c: '3' },
    { a: 3, b: 4, c: '7' },
  ])
})
