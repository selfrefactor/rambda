import { concat } from './concat'

test('', () => {
  const arr1 = [ 'a', 'b', 'c' ]
  const arr2 = [ 'd', 'e', 'f' ]

  const a = concat(
    arr2,
    arr1
  )
  const b = concat(arr2)(arr1)
  const expectedResult = [ 'd', 'e', 'f', 'a', 'b', 'c' ]

  expect(a).toEqual(expectedResult)
  expect(b).toEqual(expectedResult)
})

test('with strings', () => {
  expect(R.concat('ABC', 'DEF')).toEqual('ABCDEF')
})
