import { test as testMethod } from './test.js'

test('happy', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTruthy()

  expect(testMethod(/^y/)('xyz')).toBeFalsy()
})

test('throws if first argument is not regex', () => {
  expect(() => testMethod('foo', 'bar')).toThrowError(
    '"R.test requires a value of type RegExp as its first argument; received "foo""',
  )
})
