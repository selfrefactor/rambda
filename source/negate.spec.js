import { negate } from './negate'

test('negate', () => {
  expect(negate(420)).toEqual(-420)
  expect(negate(-13)).toEqual(13)
})
