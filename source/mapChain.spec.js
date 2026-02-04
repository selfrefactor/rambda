import { mapChain } from './mapChain.js'

const double = x => x * 2

it('happy', () => {
  expect(mapChain(double, double, double)([1, 2, 3])).toEqual([8, 16, 24])
})
