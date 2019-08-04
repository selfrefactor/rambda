import { either } from './either'

test('1', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(either(firstFn, secondFn)(1)).toBeTruthy()
})

test('2', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10
  const fn = either(firstFn)(secondFn)

  expect(fn(1)).toBeTruthy()
})
