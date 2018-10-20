import {curry} from './curry'

test('', () => {
    const addFourNumbers = (a, b, c, d) => a + b + c + d
    const curriedAddFourNumbers = curry(addFourNumbers)
    const f = curriedAddFourNumbers(1, 2)
    const g = f(3)

    expect(g(4)).toEqual(10)
})

  test('when called with more arguments', () => {
    const add = curry((n, n2) => n + n2)

    expect(add(1, 2, 3)).toEqual(3)
  })