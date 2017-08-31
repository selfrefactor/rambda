const R = require('../dist/rambda.cjs')

describe('replace', () => {
  it('', () => {
    expect(
      R.replace('foo', 'yes', 'foo bar baz')
    ).toEqual('yes bar baz')

    expect(
      R.replace(/\s/g)('|')('foo bar baz')
    ).toEqual('foo|bar|baz')
  })
})
