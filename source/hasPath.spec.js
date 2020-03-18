import { hasPath } from './hasPath'

test('when true', () => {
  const path = 'a.b'
  const obj = { a : { b : [] } }

  const result = hasPath(path)(obj)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const path = 'a.b'
  const obj = {}

  const result = hasPath(path, obj)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

