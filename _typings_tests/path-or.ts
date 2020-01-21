import { pathOr } from 'rambda'

describe('pathOr', () => {
  it('1', () => {
    const x = pathOr<string>('foo', 'x.y', { x : { y : 'bar' } })
    x // $ExpectType string
  });
});
