const R = require('../../rambda')

test('', () => {
  const rules = [
    x => R.type(x) === 'Number',
    x => x > 10,
    x => x * 7 < 100,
  ]

  expect(R.allPass(
    rules,
    11
  )).toBeTruthy()

  expect(R.allPass(
    rules,
    undefined
  )).toBeFalsy()
})

const obj =

test('when returns true', () => {
  const conditionArr = [
    val => val.a === 1,
    val => val.b === 2,
  ]

  expect(R.allPass(conditionArr, {
    a : 1,
    b : 2,
  })).toBeTruthy()
})

test('when returns false', () => {
  const conditionArr = [
    val => val.a === 1,
    val => val.b === 3,
  ]

  expect(R.allPass(conditionArr)({
    a : 1,
    b : 2,
  })).toBeFalsy()
})
