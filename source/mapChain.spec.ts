import { mapChain } from './mapChain'
import { pipe } from './pipe'

const double = (x: number) => x * 2

test('happy', () => {
  expect(mapChain<number[], number, number, number>(double, double, double)([1, 2, 3])).toEqual([8, 16, 24])
})

test('type test', () => {
  const list = [1, 2, 3]
  const result = pipe(
    list,
    mapChain(
      x => String(x),
      x => x !== 'foo',
    ),
  )
  expectTypeOf(result).toEqualTypeOf<boolean[]>()
  expect(result).toEqual([true, true, true])
})
