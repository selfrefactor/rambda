import { test as testMethod } from './testMethod'

test('happy', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTrue()

  expect(testMethod(/^y/)('xyz')).toBeFalse()
})

test('throws if first argument is not regex', () => {
  expect(() => testMethod('foo', 'bar')).toThrow('‘test’ requires a value of type RegExp as its first argument; received "foo"')
})
