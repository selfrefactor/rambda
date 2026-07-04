import { createObjectFromKeys } from './createObjectFromKeys'

test('happy', () => {
  const result = createObjectFromKeys((key: string, index: number) => key.toUpperCase() + index)(['a', 'b'])
  const expected = { a: 'A0', b: 'B1' }
  expect(result).toEqual(expected)
})
