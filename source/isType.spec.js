import {isType} from './isType'
import {delay} from './delay'

const list = [1, 2, 3]

test('array', () => {
  expect(isType('Array', list)).toBeTruthy()
  expect(isType('Array')([])).toBeTruthy()
})

test('promise', () => {
  expect(isType('Promise', Promise.resolve(1))).toBeTruthy()
})

test('async', () => {
  async function fn() {}

  expect(isType('Promise', fn)).toBeTruthy()
})

test('with R.delay', () => {
  expect(isType('Function', delay)).toBeTruthy()
  expect(isType('Promise', delay(100))).toBeTruthy()
})
