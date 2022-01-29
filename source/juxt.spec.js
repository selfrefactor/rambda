import { juxt } from './juxt'

test('happy', () => {
  const getRange = juxt([Math.min, Math.max]);
  const result =getRange(3, 4, 9, -3);
  expect(result).toEqual([-3, 9])
})
