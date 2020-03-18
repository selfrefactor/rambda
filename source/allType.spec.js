import { allType } from './allType'

test('when true', () => {
  const result = allType('Array')(
    [ 1, 2, 3 ], [], [ null ]
  )

  expect(result).toBe(true)
})

test('when false', () => {
  const result = allType('String')(
    1, undefined, null, []
  )

  expect(result).toBe(false)
})
