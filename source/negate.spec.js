import { negate } from './negate.js'

test('negate', () => {
  expect(negate(420)).toBe(-420)
  expect(negate(-13)).toBe(13)
})
