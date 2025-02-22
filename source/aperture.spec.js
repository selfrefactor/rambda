import { aperture } from './aperture.js'

const list = [1, 2, 3, 4, 5, 6, 7]

test('happy', () => {
  expect(aperture(1, list)).toEqual([[1], [2], [3], [4], [5], [6], [7]])
  expect(aperture(2, list)).toEqual([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ])
  expect(aperture(3, list)).toEqual([
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
    [4, 5, 6],
    [5, 6, 7],
  ])
  expect(aperture(8, list)).toEqual([])
})
