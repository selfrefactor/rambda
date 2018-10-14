const R = require('../rambda')

describe('type', () => {
  it('', () => {
    const fn1 = () => {}
    const fn2 = function () {}

    function fn3 () {}
    [
      () => {},
      fn1,
      fn2,
      fn3,
    ].map(val => {
      expect(R.type(val)).toEqual('Function')
    })

    const delay = ms => new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

    expect(R.type(delay(10))).toEqual('Promise')

    expect(R.type(async () => {})).toEqual('Async')

    expect(R.type({})).toEqual('Object')

    expect(R.type(1)).toEqual('Number')

    expect(R.type(false)).toEqual('Boolean')

    expect(R.type('foo')).toEqual('String')

    expect(R.type(null)).toEqual('Null')

    expect(R.type([])).toEqual('Array')

    expect(R.type(/\s/g)).toEqual('RegExp')

    expect(R.type(undefined)).toEqual('Undefined')
  })
})
