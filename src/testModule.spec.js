import { test as testModule } from './testModule'

test('', () => {
  expect(testModule(/^x/, 'xyz')).toBeTruthy()

  expect(testModule(/^y/)('xyz')).toBeFalsy()
})
