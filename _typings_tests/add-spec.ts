import { add } from 'rambda'

describe('add', () => {
  it('number', () => {
    const resultA = add(4)(1); // $ExpectType number
    const resultB = add(4,1); // $ExpectType number
  });
});
