import { bind } from './bind.js'
import { call } from './call.js'

test('happy', () => {
  expect(call(
    Math.max, 1, 2, 3, -99, 42, 6, 7
  )).toBe(42)
})

test('accepts one or more arguments', () => {
  const fn = function (){
    return arguments.length
  }
  expect(call(fn)).toBe(0)
  expect(call(fn, 'x')).toBe(1)
  expect(call(
    fn, 'x', 'y'
  )).toBe(2)
  expect(call(
    fn, 'x', 'y', 'z'
  )).toBe(3)
})

test('provides no way to specify context', () => {
  var obj = {
    method(){
      return this === obj
    },
  }
  expect(call(obj.method)).toBe(false)
  expect(call(bind(obj.method, obj))).toBe(true)
})
