import { both } from './both'

const firstFn = val => val > 0
const secondFn = val => val < 10

test('without curry', () => {
  expect(both(firstFn, secondFn)(7)).toBeTruthy()
})

test('with curry', () => {
  expect(both(firstFn)(secondFn)(17)).toBeFalsy()
})
