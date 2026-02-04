import { filterMap } from './filterMap.js'

const double = x => x > 1 ? x * 2 : null

it('happy', () => {
  expect(filterMap(double)([1, 2, 3])).toEqual([4, 6])
})
