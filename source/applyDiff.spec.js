import { applyDiff } from './applyDiff'

test('remove operation', () => {
  const rules = [
    {
      op   : 'remove',
      path : 'a.b',
    },
  ]
  const result = applyDiff(rules, {
    a : {
      b : 1,
      c : 2,
    },
  })
  expect(result).toEqual({ a : { c : 2 } })
})

test('update operation', () => {
  const rules = [
    {
      op    : 'update',
      path  : 'a.b',
      value : 3,
    },
    {
      op    : 'update',
      path  : 'a.c.1',
      value : 3,
    },
    {
      op    : 'update',
      path  : 'a.d',
      value : 3,
    },
  ]
  const result = applyDiff(rules, {
    a : {
      b : 1,
      c : [ 1, 2 ],
    },
  })
  expect(result).toEqual({
    a : {
      b : 3,
      c : [ 1, 3 ],
    },
  })
})

test('add operation', () => {
  const rules = [
    {
      op    : 'add',
      path  : 'a.b',
      value : 3,
    },
    {
      op    : 'add',
      path  : 'a.d',
      value : 3,
    },
  ]
  const result = applyDiff(rules, {
    a : {
      b : 1,
      c : 2,
    },
  })

  expect(result).toEqual({
    a : {
      b : 1,
      c : 2,
      d : 3,
    },
  })
})
