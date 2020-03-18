import { values } from 'rambda'

describe('values', () => {
  it('happy', () => {
    const result = values({
      a : 1,
      b : 2,
      c : 3,
    })
    result // $ExpectType number[]
  });
});
