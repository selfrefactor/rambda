import { curryN } from './curryN'

describe('curryN', function() {
  function source(a, b, c, d) {
    void d;
    return a * b * c;
  }
  test('accepts an arity', function() {
    const curried = curryN(3, source);
    expect(curried(1)(2)(3)).toEqual(6);
    expect(curried(1, 2)(3)).toEqual(6);
    expect(curried(1)(2, 3)).toEqual(6);
    expect(curried(1, 2, 3)).toEqual(6);
  });

  test('can be partially applied', function() {
    const curry3 = curryN(3);
    const curried = curry3(source);
    expect(curried.length).toEqual(3);
    expect(curried(1)(2)(3)).toEqual(6);
    expect(curried(1, 2)(3)).toEqual(6);
    expect(curried(1)(2, 3)).toEqual(6);
    expect(curried(1, 2, 3)).toEqual(6);
  });

  test('preserves context', function() {
    const ctx = {x: 10};
    const f = function(a, b) { return a + b * this.x; };
    const g = curryN(2, f);

    expect(g.call(ctx, 2, 4)).toEqual(42);
    expect(g.call(ctx, 2).call(ctx, 4)).toEqual(42);
  });

  test('forwards extra arguments', function() {
    const f = function() { return Array.prototype.slice.call(arguments); };
    const g = curryN(3, f);

    expect(g(1, 2, 3)).toEqual([1, 2, 3]);
    expect(g(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
    expect(g(1, 2)(3, 4)).toEqual([1, 2, 3, 4]);
    expect(g(1)(2, 3, 4)).toEqual([1, 2, 3, 4]);
    expect(g(1)(2)(3, 4)).toEqual([1, 2, 3, 4]);
  });

});
