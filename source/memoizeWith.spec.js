import { memoizeWith } from './memoizeWith.js'

test('calculates the value for a given input only once', () => {
  let ctr = 0
  const fib = memoizeWith(x => x,
    n => {
      ctr += 1

      return n < 2 ? n : fib(n - 2) + fib(n - 1)
    })
  const result = fib(10)
  expect(result).toBe(55)
  expect(ctr).toBe(11)
})

test('handles multiple parameters', () => {
  const f = memoizeWith((
    a, b, c
  ) => a + b + c,
  (
    a, b, c
  ) => a + ', ' + b + c)

  expect(f(
    'Hello', 'World', '!'
  )).toBe('Hello, World!')
  expect(f(
    'Goodbye', 'Cruel World', '!!!'
  )).toBe('Goodbye, Cruel World!!!')
  expect(f(
    'Hello', 'how are you', '?'
  )).toBe('Hello, how are you?')
  expect(f(
    'Hello', 'World', '!'
  )).toBe('Hello, World!')
})
