import { randomString } from './randomString'

test('happy', () => {
  expect(randomString().length).toBe(8)
})

test('with length', () => {
  expect(randomString(3).length).toBe(3)
})

test('only string randomString', () => {
  expect(randomString(3, true).length).toBe(3)
})
