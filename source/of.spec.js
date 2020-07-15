import { of } from './of'

test('happy', () => {
  expect(of(3)).toEqual([3])

  expect(of(null)).toEqual([null])
})
