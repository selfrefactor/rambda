// import { append } from './append.js'
import { append } from 'ramda'

test('happy', () => {
  expect(append('tests', [ 'write', 'more' ])).toEqual([
    'write',
    'more',
    'tests',
  ])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual([ 'tests' ])
})

test('with strings', () => {
  expect(append('o', 'fo')).toEqual([ 'f', 'o', 'o' ])
})
