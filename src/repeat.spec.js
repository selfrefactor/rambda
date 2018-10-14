const R = require('../rambda')

describe('repeat', () => {
  it('', () => {
    expect(R.repeat('')(3)).toEqual([ '', '', '' ])
    expect(R.repeat('foo', 3)).toEqual([ 'foo', 'foo', 'foo' ])

    const obj = {}
    const arr = R.repeat(obj, 3)

    expect(arr).toEqual([ {}, {}, {} ])

    expect(arr[ 0 ] === arr[ 1 ]).toBeTruthy()
  })
})
