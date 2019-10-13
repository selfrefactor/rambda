import { test as testMethod } from './testMethod'

test('', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTruthy()

  expect(testMethod(/^y/)('xyz')).toBeFalsy()
})
