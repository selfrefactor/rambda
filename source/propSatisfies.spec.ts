import { propSatisfies } from './propSatisfies'
import { pipe } from './pipe'

test('when true', () => {
  expect(propSatisfies((x: number) => x > 0, 'a')({ a: 1 })).toBeTruthy()
})

test('when false', () => {
  expect(propSatisfies((x: number) => x < 0, 'a')({ a: 1 })).toBeFalsy()
})

test('type test', () => {
  const result = pipe({ a: 1 }, propSatisfies(x => x > 0, 'a'))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBeTruthy()
})
