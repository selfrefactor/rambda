import {count} from './count'

const predicate = x => x.a !== undefined
test('with empty list', () => {
  expect(count(predicate, [])).toBe(0)
})

test('happy', () => {
  const list = [1, 2, {a: 1}, 3, {a: 1}]

  expect(count(predicate)(list)).toBe(2)
})
