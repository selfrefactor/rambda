import { drop } from 'rambda'

describe('drop', () => {
  it('happy', () => {
    const x = drop(2, 'foo'); // $ExpectType string
    x // $ExpectType string
    const xx = drop(2)('foo'); // $ExpectType string
    xx // $ExpectType string
    const y = drop(2, [1,2,3]); // $ExpectType number[]
    y // $ExpectType number[]
    const yy = drop<number>(2)([1,2,3]); // $ExpectType number[]
    yy // $ExpectType number[]
  });
});
