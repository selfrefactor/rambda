import { compact } from './compact'

test('happy', () => {
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
  const expected = [ 1, false, ' ', 'foo', [ 1 ] ]

  expect(result).toEqual(expected)
})
