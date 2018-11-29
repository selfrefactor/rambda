import { type } from './type'

test('type', () => {
  const fn1 = () => {}
  const fn2 = function() {}

  function fn3() {}
  ;[ () => {}, fn1, fn2, fn3 ].map(val => {
    expect(type(val)).toStrictEqual('Function')
  })

  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  expect(type(delay(10))).toStrictEqual('Promise')

  expect(type(async () => {})).toStrictEqual('Async')

  expect(type({})).toStrictEqual('Object')

  expect(type(1)).toStrictEqual('Number')

  expect(type(false)).toStrictEqual('Boolean')

  expect(type('foo')).toStrictEqual('String')

  expect(type(null)).toStrictEqual('Null')

  expect(type([])).toStrictEqual('Array')

  expect(type(/\s/g)).toStrictEqual('RegExp')

  expect(type(undefined)).toStrictEqual('Undefined')
})
