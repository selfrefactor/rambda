import { includes } from './includes'
test('includes with string', () => {
  const str = 'more is less'

  expect(includes('less')(str)).toBeTruthy()

  expect(includes('never', str)).toBeFalsy()
})

test('includes with array', () => {
  const arr = [1, 2, 3]

  expect(includes(2)(arr)).toBeTruthy()

  expect(includes(4, arr)).toBeFalsy()
})
