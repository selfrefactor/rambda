import { propEq } from './propEq'
import { pipe } from './pipe'

test('happy', () => {
  const obj = { foo: 'bar' }
  const result = pipe(obj, propEq('bar', 'foo'))
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBeTruthy()
})

test('returns false if called with a null or undefined object', () => {
  expect(propEq('name', 'Abby')(null as any)).toBeFalsy()
  expect(propEq('name', 'Abby')(undefined as any)).toBeFalsy()
})
