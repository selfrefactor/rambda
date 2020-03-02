import { applySpec, add, multiply } from 'rambda'

describe('applySpec', () => {
  it('number', () => {
    const result = applySpec({
      one: (x1) => x1,
      two: (x1, x2) => x1 + x2,
      three: (x1, x2, x3) => x1 + x2 + x3,
    }, 1,2,3)

  });
});
