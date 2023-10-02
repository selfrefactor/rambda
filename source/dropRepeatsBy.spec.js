import { dropRepeatsBy } from './dropRepeatsBy.js'

test('happy', () => {
  const fn = ({ i }) => ({ i : Math.abs(i) })
  const objs = [ { i : 1 }, { i : 2 }, { i : 3 }, { i : -4 }, { i : 5 }, { i : 3 } ]
  const objs2 = [
    { i : 1 },
    { i : -1 },
    { i : 1 },
    { i : 2 },
    { i : 3 },
    { i : 3 },
    { i : -4 },
    { i : 4 },
    { i : 5 },
    { i : 3 },
  ]
  expect(dropRepeatsBy(fn, objs2)).toEqual(objs)
  expect(dropRepeatsBy(fn, objs)).toEqual(objs)
})

test('keeps elements from the left', () => {
  expect(dropRepeatsBy(({ n, ...rest }) => ({ ...rest }),
    [
      {
        i : 1,
        n : 1,
      },
      {
        i : 1,
        n : 2,
      },
      {
        i : 1,
        n : 3,
      },
      {
        i : 4,
        n : 1,
      },
      {
        i : 4,
        n : 2,
      },
    ])).toEqual([
    {
      i : 1,
      n : 1,
    },
    {
      i : 4,
      n : 1,
    },
  ])
})

test('returns an empty array for an empty array', () => {
  expect(dropRepeatsBy(() => {}, [])).toEqual([])
})
