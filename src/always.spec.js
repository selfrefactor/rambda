import { always } from './always'

test('', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})
