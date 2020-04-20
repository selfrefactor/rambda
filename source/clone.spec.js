import assert from 'assert'

import { clone } from './clone'
import { equals } from './equals'

test('with array', () => {
  const arr = [
    {
      b : 2,
      c : 'foo',
      d : [ 1, 2, 3 ],
    },
    1,
    new Date(),
    null,
  ]
  expect(clone(arr)).toEqual(arr)
})

test('with object', () => {
  const arr = {
    a : 1,
    b : 2,
    c : 3,
    d : [ 1, 2, 3 ],
    e : new Date(),
  }
  expect(clone(arr)).toEqual(arr)
})

test('with date', () => {
  const date = new Date(
    2014, 10, 14, 23, 59, 59, 999
  )

  const cloned = clone(date)
  assert.notStrictEqual(date, cloned)
  expect(cloned).toEqual(new Date(
    2014, 10, 14, 23, 59, 59, 999
  ))

  expect(cloned.getDay()).toEqual(5)
})

test('with R.equals', () => {
  const objects = [ { a : 1 }, { b : 2 } ]

  const objectsClone = clone(objects)

  const result = [
    equals(objects, objectsClone),
    equals(objects[ 0 ], objectsClone[ 0 ]),
  ]
  expect(result).toEqual([ true, true ])
})
