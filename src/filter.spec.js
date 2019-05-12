import { filter } from './filter'
import { compose } from './compose'
import { add } from './add'
import { map } from './map'
import { equals } from './equals'
import { T } from './T'

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('with compose', () => {
  const result = compose(
    filter(equals(2)),
    map(add(1))
  )(sampleObject)

  expect(result).toEqual({ a : 2 })
})

test('bad case - undefined', () => {
  expect(filter(T)(undefined)).toEqual([])
})

test('with object it passes property as second argument', () => {
  filter((val, prop) => {
    expect(typeof prop).toEqual('string')
  })(sampleObject)
})

test('pass input object as third argument', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const predicate = (val, prop, inputObject) => {
    expect(inputObject).toEqual(obj)

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({ a : 1 })
})

test('with array', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('pass index as second argument', () => {
  let counter = 0
  filter(
    (x, i) => {
      expect(i).toBe(counter)
      counter++
    },
    [ 10, 20, 30 ]
  )
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b : 2,
    d : 4,
  }

  expect(result).toEqual(expectedResult)
})
