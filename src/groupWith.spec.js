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

test('readme example', () => {
  const list = [ 4, 3, 6, 2, 2, 1 ]

  const result = groupWith(
    (a, b) => a - b === 1,
    list
  )
  const expected = [
    [ 4, 3 ],
    [ 6 ],
    [ 2 ],
    [ 2, 1 ],
  ]
  expect(result).toEqual(expected)
})

test('throw with string as input', () => {
  expect(
    () => groupWith(equals, 'Mississippi')
  ).toThrow('list.reduce is not a function')
})

test('from ramda', () => {
  expect(groupWith(equals, [])).toEqual([])

  const isConsecutive = function(a, b){
    return a + 1 === b
  }
  expect(groupWith(isConsecutive, [])).toEqual([])
  expect(groupWith(isConsecutive, [ 4, 3, 2, 1 ])).toEqual([
    [ 4 ],
    [ 3 ],
    [ 2 ],
    [ 1 ],
  ])
  expect(groupWith(isConsecutive, [ 1, 2, 3, 4 ])).toEqual([ [ 1, 2, 3, 4 ] ])
  expect(groupWith(isConsecutive, [ 1, 2, 2, 3 ])).toEqual([ [ 1, 2 ], [ 2, 3 ] ])
  expect(groupWith(isConsecutive, [ 1, 2, 9, 3, 4 ])).toEqual([
    [ 1, 2 ],
    [ 9 ],
    [ 3, 4 ],
  ])
})
