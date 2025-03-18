import { evolve } from './evolve.js'

test('happy', () => {
  const rules = {
    foo: x => x + 1,
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
