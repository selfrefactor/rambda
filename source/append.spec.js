import { append } from './append.js'

test('happy', () => {
  expect(append('tests', ['write', 'more'])).toEqual(['write', 'more', 'tests'])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual(['tests'])
})

test('with strings', () => {
  expect(append('o', 'fo')).toEqual(['f', 'o', 'o'])
})
