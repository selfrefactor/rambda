import { replace } from './replace.js'

test('happy', () => {
  expect(replace(/\s/g, '|', 'foo bar baz')).toBe('foo|bar|baz')
})

test('with function as replacer input', () => {
  expect(
    replace(
      /\s/g,
      (match, offset, str) => {
        expect(match).toBe(' ')
        expect([3, 7].includes(offset)).toBeTruthy()
        expect(str).toBe('foo bar baz')

        return '|'
      },
      'foo bar baz',
    ),
  ).toBe('foo|bar|baz')
})
