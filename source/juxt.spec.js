import {juxt} from './juxt.js'

test('happy', () => {
  const getRange = juxt([Math.min, Math.max, Math.min])
  const result = getRange(3, 4, 9, -3)
  expect(result).toEqual([-3, 9, -3])
})
