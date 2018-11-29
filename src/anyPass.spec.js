import { anyPass } from './anyPass'

test('', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]

  expect(anyPass(rules, 11)).toBeTruthy()

  expect(anyPass(rules, undefined)).toBeFalsy()
})

const obj = {
  a : 1,
  b : 2,
}

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.a === 2 ]

  expect(anyPass(conditionArr, obj)).toBeTruthy()
})

test('when returns false + curry', () => {
  const conditionArr = [ val => val.a === 2, val => val.b === 3 ]

  expect(anyPass(conditionArr)(obj)).toBeFalsy()
})
