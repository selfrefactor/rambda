const R = require("../../rambda")


test('', () => {
  const arr1 = ['a', 'b', 'c'];
  const arr2 = ['d', 'e', 'f']

  let a = R.concat(
    arr2,
    arr1
  )
  let b = R.concat(arr2)(arr1)
  const expectedResult = ['d', 'e', 'f', 'a', 'b', 'c']
  expect(a).toEqual(expectedResult)
  expect(b).toEqual(expectedResult)
})

test('string', ()=>{
  expect(
    R.concat('ABC', 'DEF')
  ).toEqual('ABCDEF')
})