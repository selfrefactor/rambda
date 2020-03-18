import { includesType } from './includesType'

test('when true', () => {
  const targetType = 'Array'
  const list = [ 1, 2, 3, [] ]

  expect(includesType(targetType, list)).toBeTruthy()
})

test('when false + curry', () => {
  const targetType = 'String'
  const list = [ 1, 2, 3, [] ]

  expect(includesType(targetType)(list)).toBeFalsy()
})
