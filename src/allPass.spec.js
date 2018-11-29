import { allPass } from './allPass'

test('', () => {
  const rules = [
    x => typeof x === 'number',
    x => x > 10,
    x => x * 7 < 100,
  ]

  expect(allPass(rules, 11)).toBeTruthy()

  expect(allPass(rules, undefined)).toBeFalsy()
})

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 2 ]

  expect(
    allPass(conditionArr, {
      a : 1,
      b : 2,
    })
  ).toBeTruthy()
})

test('when returns false', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 3 ]

  expect(
    allPass(conditionArr)({
      a : 1,
      b : 2,
    })
  ).toBeFalsy()
})
