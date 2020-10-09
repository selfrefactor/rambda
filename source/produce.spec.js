import { add, pipe } from '../rambda'
import { produce } from './produce'

const rules = {
  a : pipe(add(2), add(3)),
  b : x => ({ foo : x }),
  c : {
    d : add(2),
    e : add(10),
  },
}

const expected = {
  a : 6,
  b : { foo : 1 },
  c : {
    d : 3,
    e : 11,
  },
}

test('happy', () => {
  const result = produce(rules, 1)
  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = produce(rules)(1)
  expect(result).toEqual(expected)
})
