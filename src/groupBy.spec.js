const R = require('../../rambda')

test('groupBy', () => {

  const list = [
    { age: 12, name: 'john' },
    { age: 12, name: 'jack' },
    { age: 24, name: 'mary' },
    { age: 24, name: 'steve' },
  ]

  expect(R.groupBy(R.prop('age'))(list)).toEqual({
    12: [ { age: 12, name: 'john' }, { age: 12, name: 'jack' } ],
    24: [ { age: 24, name: 'mary' }, { age: 24, name: 'steve' } ],
  })
})
