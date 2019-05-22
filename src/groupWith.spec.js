import { groupWith } from './groupWith'
import { equals } from './equals'

test('happy', () => {
  const result = groupWith(equals, [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    21,
    21,
    1,
    2,
  ])

  const expected = [
    [ 0 ],
    [ 1, 1 ],
    [ 2 ],
    [ 3 ],
    [ 5 ],
    [ 8 ],
    [ 13 ],
    [ 21, 21, 21 ],
    [ 1 ],
    [ 2 ],
  ]

  expect(result).toEqual(expected)
})
