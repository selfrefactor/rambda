import { xnor } from './xnor'

test('when true', () => {
  expect(xnor(1, 1)).toBeTrue()
  expect(xnor(0)(0)).toBeTrue()
})

test('when false', () => {
  expect(xnor(0, 1)).toBeFalse()
})
