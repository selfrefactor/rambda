import { pathOr } from 'rambda'

describe('pathOr', () => {
  it('with string path', () => {
    const x = pathOr<string>('foo', 'x.y', { x : { y : 'bar' } })
    x // $ExpectType string
  });
  it('with array path', () => {
    const x = pathOr<string>('foo', ['x','y'], { x : { y : 'bar' } })
    x // $ExpectType string
  });
  it('without passing type looks bad', () => {
    const x = pathOr('foo', 'x.y', { x : { y : 'bar' } })
    x // $ExpectType "foo"
  });
  it('curry', () => {
    const x = pathOr<string>('foo', 'x.y')({ x : { y : 'bar' } })
    x // $ExpectType string
  });
});
