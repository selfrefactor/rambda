import { interpolate } from './interpolate'

test('within bracets', () => {
  const input = 'foo is { {{bar}} } even {{a}} more'
  const templateInput = {
    bar : 'BAR',
    a   : 1,
  }

  const result = interpolate(input, templateInput)
  const expectedResult = 'foo is { BAR } even 1 more'

  expect(result).toEqual(expectedResult)
})

test('happy', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    bar : 'BAR',
    a   : 1,
  }

  const result = interpolate(input, templateInput)
  const expectedResult = 'foo is BAR even 1 more'

  expect(result).toEqual(expectedResult)
})

test('no interpolation + curry', () => {
  const input = 'foo is bar even more'
  const templateInput = { bar : 'BAR' }

  const result = interpolate(input)(templateInput)
  const expectedResult = 'foo is bar even more'

  expect(result).toEqual(expectedResult)
})

test('with missing template input', () => {
  const input = 'foo is {{bar}} even {{a}} more'
  const templateInput = {
    baz : 'BAR',
    a   : 1,
  }

  const result = interpolate(input, templateInput)
  const expectedResult = 'foo is undefined even 1 more'

  expect(result).toEqual(expectedResult)
})

test('with arbitrary expression', () => {
  const input = '1 + 2 = {{ 1 + 2 }}'
  const templateInput = {}

  const result = interpolate(input, templateInput)

  expect(result).toEqual(input)
})
