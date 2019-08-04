import { type } from './type'
import { type as ramdaType } from 'ramda'

test('async arrow', () => {
  const asyncArrow = async () => {}
  expect(type(asyncArrow)).toBe('Async')
})

test('type', () => {
  const fn1 = () => {}
  const fn2 = function(){}

  function fn3(){}

  [ () => {}, fn1, fn2, fn3 ].map(val => {
    expect(type(val)).toEqual('Function')
  })

  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  expect(type(delay(10))).toEqual('Promise')

  expect(type(async () => {})).toEqual('Async')

  expect(type({})).toEqual('Object')

  expect(type(1)).toEqual('Number')

  expect(type(false)).toEqual('Boolean')

  expect(type('foo')).toEqual('String')

  expect(type(null)).toEqual('Null')

  expect(type([])).toEqual('Array')

  expect(type(/\s/g)).toEqual('RegExp')

  expect(type(undefined)).toEqual('Undefined')
})

test('nan', () => {
  expect(type(Number('s'))).toBe('NaN')
})

test('function inside object 1', () => {
  const obj = {
    f(){
      return 4
    },
  }

  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})

test('function inside object 2', () => {
  const name = 'f'
  const obj = {
    [ name ](){
      return 4
    },
  }
  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})
