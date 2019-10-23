import { test as testMethod } from './testMethod'

test('', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTruthy()

  expect(testMethod(/^y/)('xyz')).toBeFalsy()
})

test('throws if first argument is not regex', () => {
  expect(
    () => testMethod('foo', 'bar')
  ).toThrow('1')
})
