import { eqProps } from './eqProps.js'
import { dropRepeatsWith } from './dropRepeatsWith.js'
import { prop } from './prop.js'

const eqI = eqProps('i')

test('happy', () => {
  const list = [{ i: 1 }, { i: 2 }, { i: 2 }, { i: 3 }]
  const expected = [{ i: 1 }, { i: 2 }, { i: 3 }]
  const result = dropRepeatsWith(eqI, list)
  expect(result).toEqual(expected)
})

test('readme example', () => {
  const list = [
    {
      a: 1,
      b: 2,
    },
    {
      a: 1,
      b: 3,
    },
    {
      a: 2,
      b: 4,
    },
  ]
  const result = dropRepeatsWith(prop('a'), list)
  expect(result).toEqual([
    {
      a: 1,
      b: 2,
    },
  ])
})

test('keeps elements from the left predicate input', () => {
  const list = [
    {
      i: 1,
      n: 1,
    },
    {
      i: 1,
      n: 2,
    },
    {
      i: 1,
      n: 3,
    },
    {
      i: 4,
      n: 1,
    },
    {
      i: 4,
      n: 2,
    },
  ]
  const expected = [
    {
      i: 1,
      n: 1,
    },
    {
      i: 4,
      n: 1,
    },
  ]
  const result = dropRepeatsWith(eqI)(list)
  expect(result).toEqual(expected)
})
