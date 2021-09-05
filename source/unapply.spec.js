import { apply } from './apply'
import { unapply } from './unapply'
import { identity } from './identity';
import { converge } from './converge';
import { prop } from './prop';
import { sum } from './sum';

test('happy', () => {
  const fn = unapply(identity)
  expect(fn(1, 2, 3)).toEqual([1, 2, 3])
})

test('returns a function which is always passed one argument', function() {
  const fn = unapply(function() { return arguments.length; });
  expect(fn('x')).toEqual(1);
  expect(fn('x', 'y')).toEqual(1);
  expect(fn('x', 'y', 'z')).toEqual(1);
});

test('forwards arguments to decorated function as an array', function() {
  const fn = unapply(function(xs) { return '[' + xs + ']'; });
  expect(fn(2)).toEqual( '[2]');
  expect(fn(2, 4)).toEqual( '[2,4]');
  expect(fn(2, 4, 6)).toEqual( '[2,4,6]');
});

test('returns a function with length 0', function() {
  const fn = unapply(identity);
  expect(fn.length).toEqual(0);
});

test('is the inverse of R.apply', function() {
  let a, b, c, d, e, f, g, n;
  const rand = function() {
    return Math.floor(200 * Math.random()) - 100;
  };

  f = Math.max;
  g = unapply(apply(f));
  n = 1;
  while (n <= 100) {
    a = rand(); b = rand(); c = rand(); d = rand(); e = rand();
    expect(f(a, b, c, d, e)).toEqual(g(a, b, c, d, e));
    n += 1;
  }

  f = function(xs) { return '[' + xs + ']'; };
  g = apply(unapply(f));
  n = 1;
  while (n <= 100) {
    a = rand(); b = rand(); c = rand(); d = rand(); e = rand();
    expect(f([a, b, c, d, e])).toEqual(g([a, b, c, d, e]));
    n += 1;
  }
});

test('it works with converge', () => {
  const fn = unapply(sum)
  const convergeFn = converge(fn, [
    prop('a'),
    prop('b'),
    prop('c'),
  ])
  const obj = {
    a: 1337,
    b: 42,
    c: 1,
  }
  const expected = 1337 + 42 + 1;
  expect(convergeFn(obj)).toEqual(expected)
})