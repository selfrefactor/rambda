import { xnor } from './xnor.js'

test('when true', () => {
  expect(xnor(1, 1)).toBeTruthy()
  expect(xnor(0)(0)).toBeTruthy()
})

test('when false', () => {
  expect(xnor(0, 1)).toBeFalsy()
})
