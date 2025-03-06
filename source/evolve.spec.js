import { add } from '../rambda.js'
import { evolve } from './evolve.js'

test('happy', () => {
  const rules = {
    foo: add(1),
    nested: { bar: x => Object.keys(x).length },
  }
  const input = {
    a: 1,
    foo: 2,
    nested: { bar: { z: 3 } },
  }
  const result = evolve(rules, input)
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: { bar: 1 },
  })
})

test('nested rule is wrong', () => {
  const rules = {
    foo: add(1),
    nested: { bar: 10 },
  }
  const input = {
    a: 1,
    foo: 2,
    nested: { bar: { z: 3 } },
  }
  const result = evolve(rules)(input)
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: { bar: { z: 3 } },
  })
})

test('is recursive', () => {
  const rules = {
    nested: {
      second: add(-1),
      third: add(1),
    },
  }
  const object = {
    first: 1,
    nested: {
      second: 2,
      third: 3,
    },
  }
  const expected = {
    first: 1,
    nested: {
      second: 1,
      third: 4,
    },
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})

test('ignores primitive values', () => {
  const rules = {
    n: 2,
    m: 'foo',
  }
  const object = {
    n: 0,
    m: 1,
  }
  const expected = {
    n: 0,
    m: 1,
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})
