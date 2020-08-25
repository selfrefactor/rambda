import { any } from './any'

const arr = [ 1, 2, 3 ]

test('happy', () => {
  expect(any(val => val < 0, arr)).toBeFalse()
})

test('with curry', () => {
  expect(any(x => x > 2)(arr)).toBeTrue()
})

test('passes index to predicate', () => {
  any((x, i) => {
    expect(typeof x).toBe('string')
    expect(typeof i).toBe('number')
  })([ 'foo', 'bar' ])
})
