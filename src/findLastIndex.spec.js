import { findLastIndex } from './findLastIndex'

test('happy', () => {
  const result = findLastIndex((x, i) => {
    expect(typeof i).toBe('number')

    return x > 1
  }, [ 1, 1, 1, 2, 3, 4, 1 ])

  expect(result).toEqual(5)

  expect(findLastIndex(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toEqual(0)
})

test('with curry', () => {
  expect(findLastIndex(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toEqual(5)
})

const obj1 = { x : 100 }
const obj2 = { x : 200 }
const a = [ 11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0 ]
const even = function(x){
  return x % 2 === 0
}
const gt100 = function(x){
  return x > 100
}
const isStr = function(x){
  return typeof x === 'string'
}
const xGt100 = function(o){
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLastIndex(even, a)).toEqual(15)
  expect(findLastIndex(gt100, a)).toEqual(9)
  expect(findLastIndex(isStr, a)).toEqual(3)
  expect(findLastIndex(xGt100, a)).toEqual(10)
})

test('ramda 2', () => {
  expect(findLastIndex(even, [ 'zing' ])).toEqual(-1)
})

test('ramda 3', () => {
  expect(findLastIndex(even, [ 2, 3, 5 ])).toEqual(0)
})

test('ramda 4', () => {
  expect(findLastIndex(even, [])).toEqual(-1)
})
