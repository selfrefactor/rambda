import { pipe, add } from '../rambda'
import { produce } from './produce'

const rules = {
  a: pipe(add(2), add(3)),
  b: x => ({foo: x}),
}
const expected = {a: 6, b:{foo:1}}

test('happy', () => {
  const result = produce(rules, 1)
  expect(result).toEqual(expected)
})

test('curried', () => {
  const result = produce(rules)(1)
  expect(result).toEqual(expected)
})