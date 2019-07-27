import { mathMod } from './mathMod'

test('mathMod', () => {
  expect(mathMod(-17, 5)).toEqual(3)
  expect(mathMod(17, 5)).toEqual(2)
  expect(mathMod(17, -5)).toEqual(NaN)
  expect(mathMod(17, 0)).toEqual(NaN)
  expect(mathMod('17', 5)).toEqual(NaN)
  expect(mathMod({}, 2)).toEqual(NaN)
  expect(mathMod([], 2)).toEqual(NaN)
  expect(mathMod(Symbol(), 2)).toEqual(NaN)
})

