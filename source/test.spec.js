import { test as testMethod } from './test.js'

test('happy', () => {
  expect(testMethod(/^x/)('xyz')).toBeTruthy()
  expect(testMethod(/^y/)('xyz')).toBeFalsy()
})
