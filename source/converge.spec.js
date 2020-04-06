import { add } from './add'
import { converge } from './converge'

describe('converge', function() {
  const mult = function(a, b) {return a * b;};

  const f1 = converge(mult, [
    function(a) { return a; },
    function(a) { return a; }
  ]);
  const f2 = converge(mult, [
    function(a) { return a; },
    function(a, b) { return b; }
  ]);
  const f3 = converge(mult, [
    function(a) { return a; },
    function(a, b, c) { return c; }
  ]);

  test('passes the results of applying the arguments individually to two separate functions into a single one', function() {
    expect(converge(mult, [add(1), add(3)])(2)).toEqual(15); // mult(add1(2), add3(2)) = mult(3, 5) = 3 * 15;
  });

  test('returns a function with the length of the "longest" argument', function() {
    expect(f1.length).toEqual(1);
    expect(f2.length).toEqual(2);
    expect(f3.length).toEqual(3);
  });

  test('passes context to its functions', function() {
    const a = function(x) { return this.f1(x); };
    const b = function(x) { return this.f2(x); };
    const c = function(x, y) { return this.f3(x, y); };
    const d = converge(c, [a, b]);
    const context = {f1: add(1), f2: add(2), f3: add};
    expect(a.call(context, 1)).toEqual(2);
    expect(b.call(context, 1)).toEqual(3);
    expect(d.call(context, 1)).toEqual(5);
  });

  test('returns a curried function', function() {
    expect(f2(6)(7)).toEqual(42);
    expect(f3().length).toEqual(3);
  });

  test('works with empty functions list', function() {
    const fn = converge(function() { return arguments.length; }, []);
    expect(fn.length).toEqual(0);
    expect(fn()).toEqual(0);
  });

});
