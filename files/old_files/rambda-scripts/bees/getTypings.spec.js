const { getTypings } = require('./getTypings')

test('happy', () => {
  expect(getTypings()).toMatchSnapshot()
})
