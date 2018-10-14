const R = require('../../rambda')

test('indexBy', () => {

  const list = [
    { id: 1 },
    { id: 2 },
    { id: 10 },
    { id: 'a' },
  ]

  expect(R.indexBy(R.prop('id'))(list)).toEqual({
    '1': { id: 1 },
    '2': { id: 2 },
    '10': { id: 10 },
    'a': { id: 'a' },
  })
})
