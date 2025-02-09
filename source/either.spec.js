import { either } from './either.js'

test('with multiple inputs', () => {
  const between = (a, b, c) => a < b && b < c
  const total20 = (a, b, c) => a + b + c === 20
  const fn = either(between, total20)
  expect(fn(7, 8, 5)).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = () => true
  const Z = () => {
    effect = 'Z got evaluated'
  }
  either(F, Z)()

  expect(effect).toBe('not evaluated')
})

test('case 1', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(either(firstFn, secondFn)(1)).toBeTrue()
})

test('case 2', () => {
  const firstFn = val => val > 0
  const secondFn = val => val === -10
  const fn = either(firstFn)(secondFn)

  expect(fn(-10)).toBeTrue()
})
