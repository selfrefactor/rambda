import { head } from './head'
describe('head', () => {
    expect(head([ 'fi', 'fo', 'fum' ])).toEqual('fi')
    expect(head([])).toEqual(undefined)
    expect(head('foo')).toEqual('f')
    expect(head('')).toEqual('')
})
