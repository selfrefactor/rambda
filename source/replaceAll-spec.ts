import { replaceAll } from 'rambdax'

const str = 'foo bar foo'
const replacer = 'bar'
const patterns = [/foo/g, 'bar']

describe('R.replaceAll', () => {
  it('curried 1', () => {
    const result = replaceAll(patterns, replacer)(str)

    result // $ExpectType string
  })
})
