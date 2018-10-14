const R = require('../../rambda')

describe('curry', () => {
  it('', () => {
    const addFourNumbers = (a, b, c, d) => a + b + c + d
    const curriedAddFourNumbers = R.curry(addFourNumbers)
    const f = curriedAddFourNumbers(1, 2)
    const g = f(3)

    expect(g(4)).toEqual(10)
  })

  it('when called with more arguments', () => {
    const add = R.curry((n, n2) => n + n2)

    expect(add(1, 2, 3)).toEqual(3)
  })
})
