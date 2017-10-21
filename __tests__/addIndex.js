const R = require('../rambda')

describe('addIndex', () => {
  it('should add index as last argument of function applied to functor', () => {
    const mockFn = jest.fn()
    const functor = (fn, a, b, c) => fn(a, b, c)
    const withIndex = R.addIndex(functor)

    withIndex(mockFn, 'A', 'B', 'C', 'D')
    expect(mockFn.mock.calls[ 0 ]).toEqual([ 'A', 'B', 'C', 0 ])
  })

  it('should add incrementing index to functors first arity method ', () => {
    expect(R.addIndex(R.map)((val, index) => `${ val } - ${ index }`, [ 'A', 'B', 'C' ])).toEqual([ 'A - 0', 'B - 1', 'C - 2' ])
  })
})
