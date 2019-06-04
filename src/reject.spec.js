import { reject } from './reject'
import { compose } from './compose'
import { add } from './add'
import { map } from './map'
import { equals } from './equals'

const isOdd = n => n % 2 === 1

test('returns items that DO NOT match predicate from array', () => {
  expect(reject(isOdd, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('returns items that DO NOT match predicate from object', () => {
  expect(
    reject(isOdd, {
      a : 1,
      b : 2,
      c : 3,
      d : 4,
    })
  ).toEqual({
    b : 2,
    d : 4,
  })
})

test('should work with currying', () => {
  const result = compose(
    reject(equals(2)),
    map(add(1))
  )({
    a : 1,
    b : 2,
    c : 3,
  })

  expect(result).toEqual({
    b : 3,
    c : 4,
  })
})

test('pass index as second argument', () => {
  reject(
    (x, i) => {
      expect(typeof x).toBe('number')
      expect(typeof i).toBe('number')
    }
  )([ 10, 12, 15 ])
})
