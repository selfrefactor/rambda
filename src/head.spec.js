import { head } from './head'

test('head', () => {
  expect(head([ 'fi', 'fo', 'fum' ])).toStrictEqual('fi')
  expect(head([])).toStrictEqual(undefined)
  expect(head('foo')).toStrictEqual('f')
  expect(head('')).toStrictEqual('')
})
