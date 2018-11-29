import { always } from './always'

test('', () => {
  const fn = always(7)

  expect(fn()).toStrictEqual(7)
  expect(fn()).toStrictEqual(7)
})
