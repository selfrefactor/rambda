import { concat } from './concat'

test('', () => {
  const arr1 = [ 'a', 'b', 'c' ]
  const arr2 = [ 'd', 'e', 'f' ]

  const a = concat(arr2, arr1)
  const b = concat(arr2)(arr1)
  const expectedResult = [ 'd', 'e', 'f', 'a', 'b', 'c' ]

  expect(a).toStrictEqual(expectedResult)
  expect(b).toStrictEqual(expectedResult)
})

test('with strings', () => {
  expect(concat('ABC', 'DEF')).toStrictEqual('ABCDEF')
})
