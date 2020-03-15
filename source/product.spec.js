import { product } from './product'

test('product', () => {
  expect(product([ 2, 3, 4 ])).toEqual(24)
})
