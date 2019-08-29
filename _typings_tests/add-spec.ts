import { add } from 'rambda'

describe('add', () => {
  it('string', () => {
    const x = add('foo')('bar'); // $ExpectType string
  });
  it('number', () => {
    const x = add(4)(1); // $ExpectType number
  });
});
