import { anyPass } from './anyPass'
import { filter } from './filter'

test('happy', () => {
  const rules = [(x: any) => typeof x === 'string', (x: any) => x > 10]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTruthy()
  expect(predicate(6)).toBeFalsy()
})

test('happy 2', () => {
  const rules = [(x: any) => typeof x === 'string', (x: any) => x > 10]
  expect(anyPass(rules)(11)).toBeTruthy()
  expect(anyPass(rules)(undefined)).toBeFalsy()
})

const obj = {
  a: 1,
  b: 2,
}

test('when returns true', () => {
  const conditionArr = [(val: any) => val.a === 1, (val: any) => val.a === 2]
  expect(anyPass(conditionArr)(obj)).toBeTruthy()
})

test('when returns false', () => {
  const conditionArr = [(val: any) => val.a === 2, (val: any) => val.b === 3]
  expect(anyPass(conditionArr)(obj)).toBeFalsy()
})

test('with empty predicates list', () => {
  expect(anyPass([])(3)).toBeFalsy()
})

test('issue #604', () => {
  const plusEq = (w: number, x: number, y: number, z: number) => w + x === y + z
  const result = anyPass([plusEq])(3, 3, 3, 3)
  expectTypeOf(result).toEqualTypeOf<boolean>()
  expect(result).toBe(false)
})

test('issue #642', () => {
  const isGreater = (num: number) => num > 5
  const pred = anyPass([isGreater])
  const xs = [0, 1, 2, 3]
  const filtered1 = filter(pred)(xs)
  expectTypeOf(filtered1).toEqualTypeOf<number[]>()
  const filtered2 = xs.filter(pred)
  expectTypeOf(filtered2).toEqualTypeOf<number[]>()
})

test('functions as a type guard', () => {
  const isString = (x: unknown): x is string => typeof x === 'string'
  const isNumber = (x: unknown): x is number => typeof x === 'number'
  const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean'
  const isStringNumberOrBoolean = anyPass([isString, isNumber, isBoolean])
  const aValue: unknown = 1
  if (isStringNumberOrBoolean(aValue)) {
    expectTypeOf(aValue).toEqualTypeOf<string | number | boolean>()
  }
})
