import { mathMod } from './mathMod'

test('happy', () => {
  expect(mathMod(-17)(5)).toEqual(3)
  expect(mathMod(17, 5)).toEqual(2)
  expect(mathMod(17, -5)).toBeNaN()
  expect(mathMod(17, 0)).toBeNaN()
  expect(mathMod('17', 5)).toBeNaN()
  expect(mathMod({}, 2)).toBeNaN()
  expect(mathMod([], 2)).toBeNaN()
  expect(mathMod(Symbol(), 2)).toBeNaN()
})
