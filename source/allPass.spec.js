import { allPass } from './allPass.js'
import * as R from '../rambda.js'
test.only('happy', () => {
  const result = R.piped(
		[[1, 2, 3, 4], [3, 4, 5]],
		R.filter(allPass([R.includes(2), R.includes(3)]))
	)
	console.log(result)
})

test('when returns true', () => {
  const conditionArr = [val => val.a === 1, val => val.b === 2]

  expect(
    allPass(conditionArr)({
      a: 1,
      b: 2,
    }),
  ).toBeTrue()
})

test('when returns false', () => {
  const conditionArr = [val => val.a === 1, val => val.b === 3]

  expect(
    allPass(conditionArr)({
      a: 1,
      b: 2,
    }),
  ).toBeFalse()
})

test('works with multiple inputs', () => {
  const fn = (w, x, y, z) => w + x === y + z
  expect(allPass([fn])(3, 3, 3, 3)).toBeTrue()
})
