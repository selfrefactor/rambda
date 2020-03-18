import { anyType } from './anyType'

test('when true', () => {
  const result = anyType('Array')(
    1, undefined, null, []
  )

  expect(result).toBe(true)
})

test('when false', () => {
  const result = anyType('String')(
    1, undefined, null, []
  )

  expect(result).toBe(false)
})
