import { test as testMethod } from './testMethod'

test('', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTruthy()

  expect(testMethod(/^y/)('xyz')).toBeFalsy()
})

test('throws if first argument is not regex', () => {
  expect(
    () => testMethod('foo', 'bar')
  ).toThrow(
    '‘test’ requires a value of type RegExp as its first argument; received "foo"'
  )
})
