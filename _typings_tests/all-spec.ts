import { all } from 'rambda'

describe('all', () => {
  it('happy', () => {
    const x = all<number>(y => {
      y // $ExpectType number
      return y > 0
    })([1, 2,3 ]);
    x // $ExpectType boolean

    const q = all(y => y > 0,[1, 2,3 ]); // $ExpectType boolean

    q // $ExpectType boolean
  });
});
