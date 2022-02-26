import { partialObject } from 'ramda'

test('happy', () => {
  const multiply = ({ a, b }) => a * b;
  const fn = partialObject(multiply, { a: 2 });
  expect(fn({ b: 2 })).toBe(4)
})
