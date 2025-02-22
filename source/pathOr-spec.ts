import { pathOr } from 'rambda'

describe('R.pathOr', () => {
  it('with string path', () => {
    const x = pathOr<string>('foo', 'x.y', { x: { y: 'bar' } })
    x // $ExpectType string
  })
  it('with array path', () => {
    const x = pathOr<string>('foo', ['x', 'y'], { x: { y: 'bar' } })
    x // $ExpectType string
  })
  it('without passing type looks bad', () => {
    const x = pathOr('foo', 'x.y', { x: { y: 'bar' } })
    x // $ExpectType "foo"
  })
  it('curried', () => {
    const x = pathOr<string>('foo', 'x.y')({ x: { y: 'bar' } })
    x // $ExpectType string
  })
})
