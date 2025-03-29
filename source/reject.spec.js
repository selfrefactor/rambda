import { reject } from './reject.js'

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(reject(isEven)([1, 2, 3, 4])).toEqual([1, 3])
})
