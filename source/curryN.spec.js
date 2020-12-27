import { curryN } from './curryN'

function multiply(
  a, b, c, d, e, f, g, h, i, j, k, l
){
  if (l){
    return a * b * c * d * e * f * g * h * i * j * k * l
  }
  if (k){
    return a * b * c * d * e * f * g * h * i * j * k
  }
  if (j){
    return a * b * c * d * e * f * g * h * i * j
  }
  if (i){
    return a * b * c * d * e * f * g * h * i
  }
  if (h){
    return a * b * c * d * e * f * g * h
  }
  if (g){
    return a * b * c * d * e * f * g
  }
  if (f){
    return a * b * c * d * e * f
  }
  if (e){
    return a * b * c * d * e
  }

  return a * b * c
}

test('accepts an arity', () => {
  const curried = curryN(3, multiply)
  expect(curried(1)(2)(3)).toEqual(6)
  expect(curried(1, 2)(3)).toEqual(6)
  expect(curried(1)(2, 3)).toEqual(6)
  expect(curried(
    1, 2, 3
  )).toEqual(6)
})

test('can be partially applied', () => {
  const curry3 = curryN(3)
  const curried = curry3(multiply)
  expect(curried.length).toEqual(3)
  expect(curried(1)(2)(3)).toEqual(6)
  expect(curried(1, 2)(3)).toEqual(6)
  expect(curried(1)(2, 3)).toEqual(6)
  expect(curried(
    1, 2, 3
  )).toEqual(6)
})

test('preserves context', () => {
  const ctx = { x : 10 }
  const f = function (a, b){
    return a + b * this.x
  }
  const g = curryN(2, f)

  expect(g.call(
    ctx, 2, 4
  )).toEqual(42)
  expect(g.call(ctx, 2).call(ctx, 4)).toEqual(42)
})

test('number of arguments is 4', () => {
  const fn = curryN(4, multiply)
  expect(fn(
    1, 2, 3, 4
  )).toEqual(6)
})

test('number of arguments is 5', () => {
  const fn = curryN(5, multiply)
  expect(fn(
    1, 2, 3, 4, 5
  )).toEqual(120)
})

test('number of arguments is 6', () => {
  const fn = curryN(6, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6
  )).toEqual(720)
})

test('number of arguments is 7', () => {
  const fn = curryN(7, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7
  )).toEqual(5040)
})

test('number of arguments is 8', () => {
  const fn = curryN(8, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7, 8
  )).toEqual(40320)
})

test('number of arguments is 9', () => {
  const fn = curryN(9, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7, 8, 9
  )).toEqual(362880)
})

test('number of arguments is 10', () => {
  const fn = curryN(10, multiply)
  expect(fn(
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  )).toEqual(3628800)
})

test('number of arguments is 11', () => {
  expect(() => {
    const fn = curryN(11, multiply)
    fn(
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    )
  }).toThrowWithMessage(Error,
    'First argument to _arity must be a non-negative integer no greater than ten')
})

test('forwards extra arguments', () => {
  const createArray = function (){
    return Array.prototype.slice.call(arguments)
  }
  const fn = curryN(3, createArray)

  expect(fn(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
  expect(fn(
    1, 2, 3, 4
  )).toEqual([ 1, 2, 3, 4 ])
  expect(fn(1, 2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
  expect(fn(1)(
    2, 3, 4
  )).toEqual([ 1, 2, 3, 4 ])
  expect(fn(1)(2)(3, 4)).toEqual([ 1, 2, 3, 4 ])
})
