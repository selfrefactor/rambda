import { update } from 'rambda'

describe('update', () => {
  it('happy', () => {
    const result = update(1,0,[ 1, 2, 3 ])
    result // $ExpectType number[]
  });
});
