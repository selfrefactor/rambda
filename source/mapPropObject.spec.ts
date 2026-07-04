import { mapPropObject } from './mapPropObject'
import { pipe } from './pipe'

const fn = (x: number) => ({ a: x, flag: x > 2 })

test('happy', () => {
  const result = (pipe as any)(
    { a: [1, 2, 3], b: 'foo' },
    (mapPropObject as any)(fn, 'a'),
  )
  expect(result).toEqual({
    a: [
      { a: 1, flag: false },
      { a: 2, flag: false },
      { a: 3, flag: true },
    ],
    b: 'foo',
  })
})

test('type test', () => {
  const result = pipe(
    { a: [1, 2, 3], b: 'foo' },
    mapPropObject('a', fn),
  )
  expectTypeOf(result.a).toEqualTypeOf<{ a: number; flag: boolean }[]>()
  expectTypeOf(result.b).toEqualTypeOf<string>()
})
