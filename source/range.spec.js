import { range } from './range.js'

test('happy', () => {
  expect(range(0)(10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

test('end range is bigger than start range', () => {
  expect(range(7)(3)).toEqual([])
  expect(range(5)(5)).toEqual([])
})

test('with bad input', () => {
  const throwMessage = 'Both arguments to range must be numbers'
  expect(() => range('a')(6)).toThrowWithMessage(Error, throwMessage)
  expect(() => range(6)('z')).toThrowWithMessage(Error, throwMessage)
})
