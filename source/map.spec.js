import { map } from './map.js'

const double = x => x * 2

it('happy', () => {
  expect(map(double)([1, 2, 3])).toEqual([2, 4, 6])
})
