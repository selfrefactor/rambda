import { compact } from './compact'

test('', () => {
  const arr = [
    1,
    null,
    undefined,
    false,
    '',
    ' ',
    () => {},
    'foo',
    {},
    [],
    [ 1 ],
    /\s/g,
  ]

  const result = compact(arr)
  const expectedResult = [ 1, false, ' ', 'foo', [ 1 ] ]

  expect(result).toEqual(expectedResult)
})
