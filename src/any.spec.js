import { any } from './any'

const arr = [ 1, 2 ]

test('no curry', () => {
  expect(any(val => val < 0, arr)).toBeFalse()
})

test('with curry', () => {
  expect(any(val => val < 2)(arr)).toBeTrue()
})

test('passes index to predicate', () => {
  any((x, i) => {
    expect(typeof x).toBe('string')
    expect(typeof i).toBe('number')
  })([ 'foo', 'bar' ])
})
