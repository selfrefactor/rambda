const R = require('../../rambda')

test('', () => {
  const rules = [
    x => R.type(x) === 'String',
    x => x > 10,
  ]

  expect(R.anyPass(
    rules,
    11
  )).toBeTruthy()
  expect(R.anyPass(
    rules,
    undefined
  )).toBeFalsy()
})

const obj = {
  a : 1,
  b : 2,
}

test('when returns true', () => {
  const conditionArr = [
    val => val.a === 1,
    val => val.a === 2,
  ]

  expect(R.anyPass(conditionArr, obj)).toBeTruthy()
})

test('when returns false', () => {
  const conditionArr = [
    val => val.a === 2,
    val => val.b === 3,
  ]

  expect(R.anyPass(conditionArr)(obj)).toBeFalsy()
})
