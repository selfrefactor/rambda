import { addIndex } from './addIndex'
import { map } from './map'

test('add index as last argument', () => {
  const mockFn = jest.fn()
  const functor = (fn, a, b, c) => fn(a, b, c)
  const withIndex = addIndex(functor)

  withIndex(mockFn, 'A', 'B', 'C', 'D')
  expect(mockFn.mock.calls[0]).toEqual(['A', 'B', 'C', 0])
})

test('add incrementing index', () => {
  const result = addIndex(map)(
    (val, index) => `${val} - ${index}`,
    ['A', 'B', 'C']
  )

  expect(result).toEqual(['A - 0', 'B - 1', 'C - 2'])
})
