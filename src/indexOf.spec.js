import { indexOf } from './indexOf'

test('indexOf', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toStrictEqual(2)

  expect(indexOf(10)([ 1, 2, 3, 4 ])).toStrictEqual(-1)
})
