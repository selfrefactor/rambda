[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
[![dependencies Status](https://david-dm.org/selfrefactor/rambda/status.svg)](https://david-dm.org/selfrefactor/rambda)
![Normal size](https://img.badgesize.io/selfrefactor/rambda/master/dist/rambda.js)
![Gzip size](https://img.badgesize.io/selfrefactor/rambda/master/dist/rambda.js?compression=gzip)

# Rambda

Faster alternative to **Ramda** - [Documentation](https://selfrefactor.github.io/rambda/#/)

## Example use

```javascript
import { compose, map, filter } from 'rambda'

const result = compose(
  map(x => x * 2),
  filter(x => x > 2)
)([1, 2, 3, 4])
// => [6, 8]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [Install](#install)
* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Use with ES5](#use-with-es5)
* [Changelog](#changelog)
* [Additional info](#additional-info)

## Rambda's advantages

- Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda**

---

- Speed

**Rambda** is generally more performant than `Ramda` as the benchmarks can prove that.

<details>

<summary>
Click to expand all benchmark results

Note that some methods benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`), are called with and without curring. This is done in order to give more detailed performance feedback.

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 🚀 Fastest | 28.16% slower | 76.17% slower
 *adjust* | 🚀 Fastest | 2.8% slower | 🔳
 *all* | 🚀 Fastest | 89.64% slower | 🔳
 *allPass* | 🚀 Fastest | 98.48% slower | 🔳
 *any* | 🚀 Fastest | 92.1% slower | 29.4% slower
 *anyPass* | 🚀 Fastest | 98.67% slower | 🔳
 *append* | 🚀 Fastest | 85.14% slower | 🔳
 *applySpec* | 🚀 Fastest | 82.9% slower | 🔳
 *assoc* | 76.71% slower | 63.5% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 93.55% slower | 88.95% slower
 *compose* | 🚀 Fastest | 95.09% slower | 79.91% slower
 *curry* | 🚀 Fastest | 42.95% slower | 🔳
 *defaultTo* | 🚀 Fastest | 41.61% slower | 🔳
 *drop* | 🚀 Fastest | 89.2% slower | 🔳
 *dropLast* | 🚀 Fastest | 91.53% slower | 🔳
 *equals* | 🚀 Fastest | 84.87% slower | 59.82% slower
 *filter* | 🚀 Fastest | 72.63% slower | 11.78% slower
 *find* | 🚀 Fastest | 47.89% slower | 60.19% slower
 *findIndex* | 🚀 Fastest | 90.6% slower | 84.75% slower
 *flatten* | 10.31% slower | 96.42% slower | 🚀 Fastest
 *ifElse* | 🚀 Fastest | 23.16% slower | 🔳
 *includes* | 🚀 Fastest | 66.8% slower | 🔳
 *indexOf* | 🚀 Fastest | 69.38% slower | 0.64% slower
 *init* | 🚀 Fastest | 94.17% slower | 2.63% slower
 *is* | 🚀 Fastest | 44.05% slower | 🔳
 *isEmpty* | 37.68% slower | 92.85% slower | 🚀 Fastest
 *last* | 🚀 Fastest | 99.02% slower | 3.5% slower
 *lastIndexOf* | 🚀 Fastest | 45.56% slower | 🔳
 *map* | 🚀 Fastest | 87.72% slower | 23.59% slower
 *match* | 🚀 Fastest | 52.01% slower | 🔳
 *merge* | 🚀 Fastest | 29.34% slower | 67.66% slower
 *none* | 🚀 Fastest | 66.57% slower | 🔳
 *omit* | 🚀 Fastest | 72.93% slower | 97.97% slower
 *over* | 🚀 Fastest | 56.26% slower | 🔳
 *path* | 0.34% slower | 52.76% slower | 🚀 Fastest
 *pick* | 🚀 Fastest | 24.06% slower | 88.13% slower
 *prop* | 🚀 Fastest | 94.38% slower | 🔳
 *propEq* | 🚀 Fastest | 90.34% slower | 🔳
 *range* | 🚀 Fastest | 63.45% slower | 50.56% slower
 *reduce* | 71.84% slower | 84.24% slower | 🚀 Fastest
 *repeat* | 55.51% slower | 83.45% slower | 🚀 Fastest
 *replace* | 🚀 Fastest | 35.85% slower | 4.98% slower
 *set* | 🚀 Fastest | 57.61% slower | 🔳
 *sort* | 🚀 Fastest | 28.43% slower | 🔳
 *sortBy* | 🚀 Fastest | 16.52% slower | 72.48% slower
 *split* | 🚀 Fastest | 56.27% slower | 28.78% slower
 *splitEvery* | 🚀 Fastest | 74.75% slower | 🔳
 *take* | 🚀 Fastest | 96% slower | 26.07% slower
 *takeLast* | 🚀 Fastest | 96.37% slower | 28.53% slower
 *test* | 🚀 Fastest | 86.86% slower | 🔳
 *type* | 19.76% slower | 🚀 Fastest | 🔳
 *uniq* | 99.56% slower | 96.54% slower | 🚀 Fastest
 *update* | 🚀 Fastest | 87.94% slower | 🔳
 *view* | 🚀 Fastest | 69.35% slower | 🔳

</details>

---

- dot notation for `R.path` and `R.paths`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

---

- comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })

// No space allowed between properties
```

---

- Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

- More generic methods

`Ramda` has an overwhelming list of methods, as one could get lost putting all the methods in one's head. `Rambda`'s much smaller number of total methods(124) I see as advantage compared to the 255 of `Ramda`.

Ramda methods has plenty of really deep FP Methods, which are in fact quite useful, but they come at the price of added complexity. Such complex logics are in practice rarely needed.

You can [check the list with missing  Ramda methods in Rambda](https://github.com/selfrefactor/rambda/blob/master/files/ramdaMissing.md)  list to assure that `Rambda` doesn't have any important misses.

## Install

- **yarn add rambda**

- For UMD usage either use `./dist/rambda.umd.js` or following CDN link:

```
https://unpkg.com/rambda@4.3.0/dist/rambda.umd.js
```

## Differences between Rambda and Ramda

- Rambda's **type** detect async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handle `NaN` input, in which case it returns `"NaN"`.

- Rambda's **path** and **paths** accepts dot notation(`'x.y' same as ['x','y']`)

- Rambda's **pick** and **omit** accept comma notation(`'x,y' same as ['x','y']`)

- Rambda's **map**, **filter**, **reject** and **forEach** can iterate over objects not only arrays.

- Rambda's **map** and **filter** pass array index as second argument when mapping over arrays.

- Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

- Rambda's **adjust**, **all**, **allPass**, **any**, **anyPass**, **findIndex** , **findLastIndex** and **reject** are passing index as second argument to the predicate function.

- Rambda's **startsWith/endsWith** work only with strings, instead with array and strings.

- Rambda's **equals** doesn't protect against circular structures as **Ramda.equals** does.

- Rambda's **flip** works only for functions expecting two arguments.

- Rambda's **partial** doesn't need the input arguments to be wrapped as array.

- Rambda's **filter** returns empty array with bad input(`null` or `undefined`), while Ramda throws.

- Ramda's **includes** will throw an error if input is neither `string` nor `array`, while **Rambda** version will return `false`.

- Ramda's **clamp** work for letters, while Rambda's method work only for numbers.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

---

<details>

<summary>
Expand to see all `Ramda` tests failing for `Rambda`, if you want to know in detail the difference between the two libraries
</summary>

> adjust

Reason for failing:  ramda accepts an array-like object

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('adjust', function() {
  it('accepts an array-like object', function() {
    function args() {
      return arguments;
    }
    eq(R.adjust(2, R.add(1), args(0, 1, 2, 3)), [0, 1, 3, 3]);
  });
});
```

> allPass

Reason for failing:  ramda returns a curried function whose arity matches that of the highest-arity predicate

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('allPass', function() {
  var odd = function(n) { return n % 2 !== 0; };
  var lt20 = function(n) { return n < 20; };
  var gt5 = function(n) { return n > 5; };
  var plusEq = function(w, x, y, z) { return w + x === y + z; };
  it('returns a curried function whose arity matches that of the highest-arity predicate', function() {
    eq(R.allPass([odd, gt5, plusEq]).length, 4);
    eq(R.allPass([odd, gt5, plusEq])(9, 9, 9, 9), true);
    eq(R.allPass([odd, gt5, plusEq])(9)(9)(9)(9), true);
  });
});
```

> anyPass

Reason for failing:  ramda returns a curried function whose arity matches that of the highest-arity predicate

```javascript
const eq = require('./shared/eq')
const R = require('../../../../../rambda/dist/rambda.js')

describe('anyPass', () => {
  const odd = function(n){ return n % 2 !== 0 }
  const gt20 = function(n){ return n > 20 }
  const lt5 = function(n){ return n < 5 }
  const plusEq = function(w, x, y, z){ return w + x === y + z }
  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    eq(R.anyPass([ odd, lt5, plusEq ]).length, 4)
    eq(R.anyPass([ odd, lt5, plusEq ])(6, 7, 8, 9), false)
    eq(R.anyPass([ odd, lt5, plusEq ])(6)(7)(8)(9), false)
  })
})
```

> both

Reason for failing:  ramda supports fantasy-land

```javascript
var S = require('sanctuary');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('both', function() {
  it('accepts fantasy-land applicative functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.both(Just(true), Just(true)), Just(true));
    eq(R.both(Just(true), Just(false)), Just(false));
    eq(R.both(Just(true), Nothing()), Nothing());
    eq(R.both(Nothing(), Just(false)), Nothing());
    eq(R.both(Nothing(), Nothing()), Nothing());
  });
});
```

> clone

Reason for failing:  rambda method work only with objects and arrays

```javascript
var assert = require('assert');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('deep clone integers, strings and booleans', function() {
  it('clones integers', function() {
    eq(R.clone(-4), -4);
    eq(R.clone(9007199254740991), 9007199254740991);
  });
  it('clones floats', function() {
    eq(R.clone(-4.5), -4.5);
    eq(R.clone(0.0), 0.0);
  });
  it('clones strings', function() {
    eq(R.clone('ramda'), 'ramda');
  });
  it('clones booleans', function() {
    eq(R.clone(true), true);
  });
});
describe('deep clone objects', function() {
  it('clones objects with circular references', function() {
    var x = {c: null};
    var y = {a: x};
    var z = {b: y};
    x.c = z;
    var clone = R.clone(x);
    assert.notStrictEqual(x, clone);
    assert.notStrictEqual(x.c, clone.c);
    assert.notStrictEqual(x.c.b, clone.c.b);
    assert.notStrictEqual(x.c.b.a, clone.c.b.a);
    assert.notStrictEqual(x.c.b.a.c, clone.c.b.a.c);
    eq(R.keys(clone), R.keys(x));
    eq(R.keys(clone.c), R.keys(x.c));
    eq(R.keys(clone.c.b), R.keys(x.c.b));
    eq(R.keys(clone.c.b.a), R.keys(x.c.b.a));
    eq(R.keys(clone.c.b.a.c), R.keys(x.c.b.a.c));
    x.c.b = 1;
    assert.notDeepEqual(clone.c.b, x.c.b);
  });
});
describe('deep clone arrays', function() {
});
describe('deep clone functions', function() {
});
describe('built-in types', function() {
  it('clones RegExp object', function() {
    R.forEach(function(pattern) {
      var clone = R.clone(pattern);
      assert.notStrictEqual(clone, pattern);
      eq(clone.constructor, RegExp);
      eq(clone.source, pattern.source);
      eq(clone.global, pattern.global);
      eq(clone.ignoreCase, pattern.ignoreCase);
      eq(clone.multiline, pattern.multiline);
    }, [/x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim]);
  });
});
describe('deep clone deep nested mixed objects', function() {
  it('clones array with mutual ref object', function() {
    var obj = {a: 1};
    var list = [{b: obj}, {b: obj}];
    var clone = R.clone(list);
    assert.strictEqual(list[0].b, list[1].b);
    assert.strictEqual(clone[0].b, clone[1].b);
    assert.notStrictEqual(clone[0].b, list[0].b);
    assert.notStrictEqual(clone[1].b, list[1].b);
    eq(clone[0].b, {a:1});
    eq(clone[1].b, {a:1});
    obj.a = 2;
    eq(clone[0].b, {a:1});
    eq(clone[1].b, {a:1});
  });
});
describe('deep clone edge cases', function() {
  it('nulls, undefineds and empty objects and arrays', function() {
    eq(R.clone(null), null);
    eq(R.clone(undefined), undefined);
    assert.notStrictEqual(R.clone(undefined), null);
    var obj = {};
    assert.notStrictEqual(R.clone(obj), obj);
    var list = [];
    assert.notStrictEqual(R.clone(list), list);
  });
});
describe('Let `R.clone` use an arbitrary user defined `clone` method', function() {
  it('dispatches to `clone` method if present', function() {
    function ArbitraryClone(x) { this.value = x; }
    ArbitraryClone.prototype.clone = function() { return new ArbitraryClone(this.value); };
    var obj = new ArbitraryClone(42);
    var arbitraryClonedObj = R.clone(obj);
    eq(arbitraryClonedObj, new ArbitraryClone(42));
    eq(arbitraryClonedObj instanceof ArbitraryClone, true);
  });
});
```

> complement

Reason for failing:  ramda supports fantasy-land

```javascript
var S = require('sanctuary');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('complement', function() {
  it('accepts fantasy-land functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.complement(Just(true)), Just(false));
    eq(R.complement(Just(false)), Just(true));
    eq(R.complement(Nothing()), Nothing());
  });
});
```

> compose

Reason for failing:  ramda passes context to functions | rambda composed functions have no length

```javascript
var assert = require('assert');
var jsv = require('jsverify');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('compose', function() {
  it('performs right-to-left function composition', function() {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    var f = R.compose(R.map, R.multiply, parseInt);
    eq(f.length, 2);
    eq(f('10')([1, 2, 3]), [10, 20, 30]);
    eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
  });
  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: R.compose(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    eq(context.a(5), 40);
  });
  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.compose(f);
    eq(g.length, 3);
    eq(g(1, 2, 3), [1, 2, 3]);
  });
});
describe('compose properties', function() {
  jsv.property('composes two functions', jsv.fn(), jsv.fn(), jsv.nat, function(f, g, x) {
    return R.equals(R.compose(f, g)(x), f(g(x)));
});
```

> concat

Reason for failing:  ramda pass to concat method if present

```javascript
var assert = require('assert');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('concat', function() {
  var z1 = {
    x: 'z1',
    concat: function(that) { return this.x + ' ' + that.x; }
  };
  var z2 = {
    x: 'z2'
  };
  it('delegates to non-String object with a concat method, as second param', function() {
    eq(R.concat(z1, z2), 'z1 z2');
  });
});
```

> curry

Reason for failing:  ramda passes context to functions

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
var jsv = require('jsverify');
var funcN = require('./shared/funcN');

describe('curry', function() {
  it('properly reports the length of the curried function', function() {
    var f = R.curry(function(a, b, c, d) {return (a + b * c) / d;});
    eq(f.length, 4);
    var g = f(12);
    eq(g.length, 3);
    var h = g(3);
    eq(h.length, 2);
    eq(g(3, 6).length, 1);
  });
  it('preserves context', function() {
    var ctx = {x: 10};
    var f = function(a, b) { return a + b * this.x; };
    var g = R.curry(f);
    eq(g.call(ctx, 2, 4), 42);
    eq(g.call(ctx, 2).call(ctx, 4), 42);
  });
  it('supports R.__ placeholder', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.curry(f);
    var _ = R.__;
    eq(g(1)(2)(3), [1, 2, 3]);
    eq(g(1)(2, 3), [1, 2, 3]);
    eq(g(1, 2)(3), [1, 2, 3]);
    eq(g(1, 2, 3), [1, 2, 3]);
    eq(g(_, 2, 3)(1), [1, 2, 3]);
    eq(g(1, _, 3)(2), [1, 2, 3]);
    eq(g(1, 2, _)(3), [1, 2, 3]);
    eq(g(1, _, _)(2)(3), [1, 2, 3]);
    eq(g(_, 2, _)(1)(3), [1, 2, 3]);
    eq(g(_, _, 3)(1)(2), [1, 2, 3]);
    eq(g(1, _, _)(2, 3), [1, 2, 3]);
    eq(g(_, 2, _)(1, 3), [1, 2, 3]);
    eq(g(_, _, 3)(1, 2), [1, 2, 3]);
    eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });
  it('supports @@functional/placeholder', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.curry(f);
    var _ = {'@@functional/placeholder': true, x: Math.random()};
    eq(g(1)(2)(3), [1, 2, 3]);
    eq(g(1)(2, 3), [1, 2, 3]);
    eq(g(1, 2)(3), [1, 2, 3]);
    eq(g(1, 2, 3), [1, 2, 3]);
    eq(g(_, 2, 3)(1), [1, 2, 3]);
    eq(g(1, _, 3)(2), [1, 2, 3]);
    eq(g(1, 2, _)(3), [1, 2, 3]);
    eq(g(1, _, _)(2)(3), [1, 2, 3]);
    eq(g(_, 2, _)(1)(3), [1, 2, 3]);
    eq(g(_, _, 3)(1)(2), [1, 2, 3]);
    eq(g(1, _, _)(2, 3), [1, 2, 3]);
    eq(g(_, 2, _)(1, 3), [1, 2, 3]);
    eq(g(_, _, 3)(1, 2), [1, 2, 3]);
    eq(g(1, _, _)(_, 3)(2), [1, 2, 3]);
    eq(g(_, 2, _)(_, 3)(1), [1, 2, 3]);
    eq(g(_, _, 3)(_, 2)(1), [1, 2, 3]);
    eq(g(_, _, _)(_, _)(_)(1, 2, 3), [1, 2, 3]);
    eq(g(_, _, _)(1, _, _)(_, _)(2, _)(_)(3), [1, 2, 3]);
  });
});
describe('curry properties', function() {
  jsv.property('curries multiple values', funcN(4), jsv.json, jsv.json, jsv.json, jsv.json, function(f, a, b, c, d) {
    var g = R.curry(f);
    return R.all(R.equals(f(a, b, c, d)), [
      g(a, b, c, d),
      g(a)(b)(c)(d),
      g(a)(b, c, d),
      g(a, b)(c, d),
      g(a, b, c)(d)
    ]);
  jsv.property('curries with placeholder', funcN(3), jsv.json, jsv.json, jsv.json, function(f, a, b, c) {
    var _ = {'@@functional/placeholder': true, x: Math.random()};
    var g = R.curry(f);
    return R.all(R.equals(f(a, b, c)), [
      g(_, _, c)(a, b),
      g(a, _, c)(b),
      g(_, b, c)(a),
      g(a, _, _)(_, c)(b),
      g(a, b, _)(c)
    ]);
});
```

> difference

Reason for failing:  ramda supports negative zero

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('difference', function() {
  var M = [1, 2, 3, 4];
  var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
  var Z = [3, 4, 5, 6, 10];
  var Z2 = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.difference([0], [-0]).length, 1);
    eq(R.difference([-0], [0]).length, 1);
    eq(R.difference([NaN], [NaN]).length, 0);
    eq(R.difference([new Just([42])], [new Just([42])]).length, 0);
  });
});
```

> dropLast

Reason for failing:  ramda method can act as a transducer

```javascript
var assert = require('assert');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('dropLast', function() {
  it('can act as a transducer', function() {
    var dropLast2 = R.dropLast(2);
    assert.deepEqual(R.into([], dropLast2, [1, 3, 5, 7, 9, 1, 2]), [1, 3, 5, 7, 9]);
    assert.deepEqual(R.into([], dropLast2, [1]), []);
  });
});
```

> either

Reason for failing:  ramda supports fantasy-land

```javascript
var S = require('sanctuary');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('either', function() {
  it('accepts fantasy-land applicative functors', function() {
    var Just = S.Just;
    var Nothing = S.Nothing;
    eq(R.either(Just(true), Just(true)), Just(true));
    eq(R.either(Just(true), Just(false)), Just(true));
    eq(R.either(Just(false), Just(false)), Just(false));
    eq(R.either(Just(true), Nothing()), Nothing());
    eq(R.either(Nothing(), Just(false)), Nothing());
    eq(R.either(Nothing(), Nothing()), Nothing());
  });
});
```

> endsWith

Reason for failing:  rambda doesn't support arrays

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('startsWith', function() {
  it('should return true when an array ends with the provided value', function() {
    eq(R.endsWith(['c'], ['a', 'b', 'c']), true);
  });
  it('should return true when an array ends with the provided values', function() {
    eq(R.endsWith(['b', 'c'], ['a', 'b', 'c']), true);
  });
  it('should return false when an array does not end with the provided value', function() {
    eq(R.endsWith(['b'], ['a', 'b', 'c']), false);
  });
  it('should return false when an array does not end with the provided values', function() {
    eq(R.endsWith(['a', 'b'], ['a', 'b', 'c']), false);
  });
});
```

> equals

Reason for failing:  rambda doesn't support recursive data structures, objects with same enumerable properties, map/weakmap type of variables | ramda dispatches to `equals` method recursively

```javascript
/* global Map, Set, WeakMap, WeakSet */

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('equals', function() {
  var a = [];
  var b = a;
  it('never considers Boolean primitive equal to Boolean object', function() {
    eq(R.equals(true, new Boolean(true)), false);
    eq(R.equals(new Boolean(true), true), false);
    eq(R.equals(false, new Boolean(false)), false);
    eq(R.equals(new Boolean(false), false), false);
  });
  it('never considers number primitive equal to Number object', function() {
    eq(R.equals(0, new Number(0)), false);
    eq(R.equals(new Number(0), 0), false);
  });
  it('never considers string primitive equal to String object', function() {
    eq(R.equals('', new String('')), false);
    eq(R.equals(new String(''), ''), false);
    eq(R.equals('x', new String('x')), false);
    eq(R.equals(new String('x'), 'x'), false);
  });
  var supportsSticky = false;
  try { RegExp('', 'y'); supportsSticky = true; } catch (e) {}
  var supportsUnicode = false;
  try { RegExp('', 'u'); supportsUnicode = true; } catch (e) {}
  var listA = [1, 2, 3];
  var listB = [1, 3, 2];
  var c = {}; c.v = c;
  var d = {}; d.v = d;
  var e = []; e.push(e);
  var f = []; f.push(f);
  var nestA = {a:[1, 2, {c:1}], b:1};
  var nestB = {a:[1, 2, {c:1}], b:1};
  var nestC = {a:[1, 2, {c:2}], b:1};
  it('handles recursive data structures', function() {
    eq(R.equals(c, d), true);
    eq(R.equals(e, f), true);
    eq(R.equals(nestA, nestB), true);
    eq(R.equals(nestA, nestC), false);
  });
  it('requires that both objects have the same enumerable properties with the same values', function() {
    var a1 = [];
    var a2 = [];
    a2.x = 0;
    var b1 = new Boolean(false);
    var b2 = new Boolean(false);
    b2.x = 0;
    var d1 = new Date(0);
    var d2 = new Date(0);
    d2.x = 0;
    var n1 = new Number(0);
    var n2 = new Number(0);
    n2.x = 0;
    var r1 = /(?:)/;
    var r2 = /(?:)/;
    r2.x = 0;
    var s1 = new String('');
    var s2 = new String('');
    s2.x = 0;
    eq(R.equals(a1, a2), false);
    eq(R.equals(b1, b2), false);
    eq(R.equals(d1, d2), false);
    eq(R.equals(n1, n2), false);
    eq(R.equals(r1, r2), false);
    eq(R.equals(s1, s2), false);
  });
  if (typeof ArrayBuffer !== 'undefined' && typeof Int8Array !== 'undefined') {
    var typArr1 = new ArrayBuffer(10);
    typArr1[0] = 1;
    var typArr2 = new ArrayBuffer(10);
    typArr2[0] = 1;
    var typArr3 = new ArrayBuffer(10);
    var intTypArr = new Int8Array(typArr1);
    typArr3[0] = 0;
    it('handles typed arrays', function() {
      eq(R.equals(typArr1, typArr2), true);
      eq(R.equals(typArr1, typArr3), false);
      eq(R.equals(typArr1, intTypArr), false);
    });
  }
  if (typeof Promise !== 'undefined') {
    it('compares Promise objects by identity', function() {
      var p = Promise.resolve(42);
      var q = Promise.resolve(42);
      eq(R.equals(p, p), true);
      eq(R.equals(p, q), false);
    });
  }
  if (typeof Map !== 'undefined') {
    it('compares Map objects by value', function() {
      eq(R.equals(new Map([]), new Map([])), true);
      eq(R.equals(new Map([]), new Map([[1, 'a']])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'a']])), true);
      eq(R.equals(new Map([[1, 'a'], [2, 'b']]), new Map([[2, 'b'], [1, 'a']])), true);
      eq(R.equals(new Map([[1, 'a']]), new Map([[2, 'a']])), false);
      eq(R.equals(new Map([[1, 'a']]), new Map([[1, 'b']])), false);
      eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'c']])]])), true);
      eq(R.equals(new Map([[1, 'a'], [2, new Map([[3, 'c']])]]), new Map([[1, 'a'], [2, new Map([[3, 'd']])]])), false);
      eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [4, 5, 6]]])), true);
      eq(R.equals(new Map([[[1, 2, 3], [4, 5, 6]]]), new Map([[[1, 2, 3], [7, 8, 9]]])), false);
    });
    it('dispatches to `equals` method recursively in Set', function() {
      var a = new Map();
      var b = new Map();
      a.set(a, a);
      eq(R.equals(a, b), false);
      a.set(b, b);
      b.set(b, b);
      b.set(a, a);
      eq(R.equals(a, b), true);
    });
  }
  if (typeof Set !== 'undefined') {
    it('compares Set objects by value', function() {
      eq(R.equals(new Set([]), new Set([])), true);
      eq(R.equals(new Set([]), new Set([1])), false);
      eq(R.equals(new Set([1]), new Set([])), false);
      eq(R.equals(new Set([1, 2]), new Set([2, 1])), true);
      eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([3])])])), true);
      eq(R.equals(new Set([1, new Set([2, new Set([3])])]), new Set([1, new Set([2, new Set([4])])])), false);
      eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [4, 5, 6]])), true);
      eq(R.equals(new Set([[1, 2, 3], [4, 5, 6]]), new Set([[1, 2, 3], [7, 8, 9]])), false);
    });
    it('dispatches to `equals` method recursively in Set', function() {
      var a = new Set();
      var b = new Set();
      a.add(a);
      eq(R.equals(a, b), false);
      a.add(b);
      b.add(b);
      b.add(a);
      eq(R.equals(a, b), true);
    });
  }
  if (typeof WeakMap !== 'undefined') {
    it('compares WeakMap objects by identity', function() {
      var m = new WeakMap([]);
      eq(R.equals(m, m), true);
      eq(R.equals(m, new WeakMap([])), false);
    });
  }
  if (typeof WeakSet !== 'undefined') {
    it('compares WeakSet objects by identity', function() {
      var s = new WeakSet([]);
      eq(R.equals(s, s), true);
      eq(R.equals(s, new WeakSet([])), false);
    });
  }
  it('dispatches to `equals` method recursively', function() {
    function Left(x) { this.value = x; }
    Left.prototype.equals = function(x) {
      return x instanceof Left && R.equals(x.value, this.value);
    };
    function Right(x) { this.value = x; }
    Right.prototype.equals = function(x) {
      return x instanceof Right && R.equals(x.value, this.value);
    };
    eq(R.equals(new Left([42]), new Left([42])), true);
    eq(R.equals(new Left([42]), new Left([43])), false);
    eq(R.equals(new Left(42), {value: 42}), false);
    eq(R.equals({value: 42}, new Left(42)), false);
    eq(R.equals(new Left(42), new Right(42)), false);
    eq(R.equals(new Right(42), new Left(42)), false);
    eq(R.equals([new Left(42)], [new Left(42)]), true);
    eq(R.equals([new Left(42)], [new Right(42)]), false);
    eq(R.equals([new Right(42)], [new Left(42)]), false);
    eq(R.equals([new Right(42)], [new Right(42)]), true);
  });
});
```

> filter

Reason for failing:  ramda dispatches to `filter` method of object

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('filter', function() {
  var even = function(x) {return x % 2 === 0;};
  it('dispatches to passed-in non-Array object with a `filter` method', function() {
    var f = {filter: function(f) { return f('called f.filter'); }};
    eq(R.filter(function(s) { return s; }, f), 'called f.filter');
  });
});
```

> flip

Reason for failing:  rambda flip work only for functions with two arguments

```javascript
var jsv = require('jsverify');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
var funcN = require('./shared/funcN');
describe('flip', function() {
  it('returns a function which inverts the first two arguments to the supplied function', function() {
    var f = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    var g = R.flip(f);
    eq(f('a', 'b', 'c'), 'a b c');
    eq(g('a', 'b', 'c'), 'b a c');
  });
  it('returns a curried function', function() {
    var f = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    var g = R.flip(f)('a');
    eq(g('b', 'c'), 'b a c');
  });
  it('returns a function with the correct arity', function() {
    var f2 = function(a, b) {return a + ' ' + b;};
    var f3 = function(a, b, c) {return a + ' ' + b + ' ' + c;};
    eq(R.flip(f2).length, 2);
    eq(R.flip(f3).length, 3);
  });
});
describe('flip properties', function() {
  jsv.property('inverts first two arguments', funcN(3), jsv.json, jsv.json, jsv.json, function(f, a, b, c) {
    var g = R.flip(f);
    return R.equals(f(a, b, c), g(b, a, c));
  });
});
```

> forEach

Reason for failing:  ramda method dispatches to `forEach` method

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('forEach', function() {
  var list = [{x: 1, y: 2}, {x: 100, y: 200}, {x: 300, y: 400}, {x: 234, y: 345}];
  it('dispatches to `forEach` method', function() {
    var dispatched = false;
    var fn = function() {};
    function DummyList() {}
    DummyList.prototype.forEach = function(callback) {
      dispatched = true;
      eq(callback, fn);
    };
    R.forEach(fn, new DummyList());
    eq(dispatched, true);
  });
});
```

> groupBy

Reason for failing:  ramda support transforms

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
var _isTransformer = require('rambda/internal/_isTransformer');

describe('groupBy', function() {
  it('dispatches on transformer objects in list position', function() {
    var byType = R.prop('type');
    var xf = {
      '@@transducer/init': function() { return {}; },
      '@@transducer/result': function(x) { return x; },
      '@@transducer/step': R.mergeRight
    };
    eq(_isTransformer(R.groupBy(byType, xf)), true);
  });
});
```

> groupWith

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('groupWith', function() {
  it('splits the list into groups according to the grouping function', function() {
    eq(R.groupWith(R.equals, [1, 2, 2, 3]), [[1], [2, 2], [3]]);
    eq(R.groupWith(R.equals, [1, 1, 1, 1]), [[1, 1, 1, 1]]);
    eq(R.groupWith(R.equals, [1, 2, 3, 4]), [[1], [2], [3], [4]]);
  });
  it('can be turned into the original list through concatenation', function() {
    var list = [1, 1, 2, 3, 4, 4, 5, 5];
    eq(R.unnest(R.groupWith(R.equals, list)), list);
    eq(R.unnest(R.groupWith(R.complement(R.equals), list)), list);
    eq(R.unnest(R.groupWith(R.T, list)), list);
    eq(R.unnest(R.groupWith(R.F, list)), list);
  });
  it('also works on strings', function() {
    eq(R.groupWith(R.equals)('Mississippi'), ['M','i','ss','i','ss','i','pp','i']);
  });
});
```

> has

Reason for failing:  rambda does check properties from the prototype chain

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('has', function() {
  var fred = {name: 'Fred', age: 23};
  var anon = {age: 99};
  it('does not check properties from the prototype chain', function() {
    var Person = function() {};
    Person.prototype.age = function() {};
    var bob = new Person();
    eq(R.has('age', bob), false);
  });
});
```

> ifElse

Reason for failing:  rambda doesn't return a curried function

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('ifElse', function() {
  var t = function(a) { return a + 1; };
  var identity = function(a) { return a; };
  var isArray = function(a) { return Object.prototype.toString.call(a) === '[object Array]'; };
  it('returns a function whose arity equals the max arity of the three arguments to `ifElse`', function() {
    function a0() { return 0; }
    function a1(x) { return x; }
    function a2(x, y) { return x + y; }
    eq(R.ifElse(a0, a1, a2).length, 2);
    eq(R.ifElse(a0, a2, a1).length, 2);
    eq(R.ifElse(a1, a0, a2).length, 2);
    eq(R.ifElse(a1, a2, a0).length, 2);
    eq(R.ifElse(a2, a0, a1).length, 2);
    eq(R.ifElse(a2, a1, a0).length, 2);
  });
  it('returns a curried function', function() {
    var v = function(a) { return typeof a === 'number'; };
    var ifIsNumber = R.ifElse(v);
    eq(ifIsNumber(t, identity)(15), 16);
    eq(ifIsNumber(t, identity)('hello'), 'hello');
    var fn = R.ifElse(R.gt, R.subtract, R.add);
    eq(fn(2)(7), 9);
    eq(fn(2, 7), 9);
    eq(fn(7)(2), 5);
    eq(fn(7, 2), 5);
  });
});
```

> includes

Reason for failing:  ramda method pass to `equals` method if available

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('includes', function() {
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.includes(0, [-0]), false);
    eq(R.includes(-0, [0]), false);
    eq(R.includes(NaN, [NaN]), true);
    eq(R.includes(new Just([42]), [new Just([42])]), true);
  });
});
```

> indexBy

Reason for failing:  ramda method can act as a transducer

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('indexBy', function() {
  it('can act as a transducer', function() {
    var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
    var transducer = R.compose(
      R.indexBy(R.prop('id')),
      R.map(R.pipe(
        R.adjust(0, R.toUpper),
        R.adjust(1, R.omit(['id']))
      )));
    var result = R.into({}, transducer, list);
    eq(result, {ABC: {title: 'B'}, XYZ: {title: 'A'}});
  });
});
```

> indexOf

Reason for failing:  ramda method dispatches to `indexOf` method

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('indexOf', function() {
  var input = [1, 2, 3, 4, 5];
  var list = [1, 2, 3];
  list[-2] = 4; // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.indexOf(0, [-0]), -1);
    eq(R.indexOf(-0, [0]), -1);
    eq(R.indexOf(NaN, [NaN]), 0);
    eq(R.indexOf(new Just([42]), [new Just([42])]), 0);
  });
  it('dispatches to `indexOf` method', function() {
    function Empty() {}
    Empty.prototype.indexOf = R.always(-1);
    function List(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    List.prototype.indexOf = function(x) {
      var idx = this.tail.indexOf(x);
      return this.head === x ? 0 : idx >= 0 ? 1 + idx : -1;
    };
    var list = new List('b',
      new List('a',
        new List('n',
          new List('a',
            new List('n',
              new List('a',
                new Empty()
              )
            )
          )
        )
      )
    );
    eq(R.indexOf('a', 'banana'), 1);
    eq(R.indexOf('x', 'banana'), -1);
    eq(R.indexOf('a', list), 1);
    eq(R.indexOf('x', list), -1);
  });
});
```

> intersection

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('intersection', function() {
  var M = [1, 2, 3, 4];
  var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
  it('does not allow duplicates in the output even if the input lists had duplicates', function() {
    eq(R.intersection(M2, N2), [3, 4]);
  });
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.intersection([0], [-0]).length, 0);
    eq(R.intersection([-0], [0]).length, 0);
    eq(R.intersection([NaN], [NaN]).length, 1);
    eq(R.intersection([new Just([42])], [new Just([42])]).length, 1);
  });
});
```

> intersperse

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('intersperse', function() {
  it('dispatches', function() {
    var obj = {intersperse: function(x) { return 'override ' + x; }};
    eq(R.intersperse('x', obj), 'override x');
  });
});
```

> isEmpty

Reason for failing:  ramda supports typed arrays

```javascript
var R = require('rambda');
var eq = require('./shared/eq');

describe('isEmpty', function() {
  const a = 1
  it('returns true for empty typed array', function() {
    eq(R.isEmpty(Uint8Array.from('')), true);
    eq(R.isEmpty(Float32Array.from('')), true);
    eq(R.isEmpty(new Float32Array([])), true);
    eq(R.isEmpty(Uint8Array.from('1')), false);
    eq(R.isEmpty(Float32Array.from('1')), false);
    eq(R.isEmpty(new Float32Array([1])), false);
  });
});
```

> keys

Reason for failing:  ramda method works for primitives

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('keys', function() {
  var obj = {a: 100, b: [1, 2, 3], c: {x: 200, y: 300}, d: 'D', e: null, f: undefined};
  function C() { this.a = 100; this.b = 200; }
  C.prototype.x = function() { return 'x'; };
  C.prototype.y = 'y';
  var cobj = new C();
  it('works for primitives', function() {
    eq(R.keys(null), []);
    eq(R.keys(undefined), []);
    eq(R.keys(55), []);
    eq(R.keys('foo'), []);
    eq(R.keys(true), []);
    eq(R.keys(false), []);
    eq(R.keys(NaN), []);
    eq(R.keys(Infinity), []);
    eq(R.keys([]), []);
  });
});
```

> lastIndexOf

Reason for failing:  ramda method dispatches to `lastIndexOf` method

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('lastIndexOf', function() {
  var input = [1, 2, 3, 4, 5, 1];
  var list = ['a', 1, 'a'];
  list[-2] = 'a'; // Throw a wrench in the gears by assigning a non-valid array index as object property.
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.lastIndexOf(0, [-0]), -1);
    eq(R.lastIndexOf(-0, [0]), -1);
    eq(R.lastIndexOf(NaN, [NaN]), 0);
    eq(R.lastIndexOf(new Just([42]), [new Just([42])]), 0);
  });
  it('dispatches to `lastIndexOf` method', function() {
    function Empty() {}
    Empty.prototype.lastIndexOf = R.always(-1);
    function List(head, tail) {
      this.head = head;
      this.tail = tail;
    }
    List.prototype.lastIndexOf = function(x) {
      var idx = this.tail.lastIndexOf(x);
      return idx >= 0 ? 1 + idx : this.head === x ? 0 : -1;
    };
    var list = new List('b',
      new List('a',
        new List('n',
          new List('a',
            new List('n',
              new List('a',
                new Empty()
              )
            )
          )
        )
      )
    );
    eq(R.lastIndexOf('a', 'banana'), 5);
    eq(R.lastIndexOf('x', 'banana'), -1);
    eq(R.lastIndexOf('a', list), 5);
    eq(R.lastIndexOf('x', list), -1);
  });
  it('finds function, compared by identity', function() {
    var f = function() {};
    var g = function() {};
    var list = [g, f, g, f];
    eq(R.lastIndexOf(f, list), 3);
  });
});
```

> length

Reason for failing:  ramda method supports object with `length` method

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('length', function() {
  it('returns NaN for length property of unexpected type', function() {
    eq(R.identical(NaN, R.length({length: ''})), true);
    eq(R.identical(NaN, R.length({length: '1.23'})), true);
    eq(R.identical(NaN, R.length({length: null})), true);
    eq(R.identical(NaN, R.length({length: undefined})), true);
    eq(R.identical(NaN, R.length({})), true);
  });
});
```

> mean

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('mean', function() {
  it('handles array-like object', function() {
    eq(R.mean((function() { return arguments; })(1, 2, 3)), 2);
  });
});
```

> partial

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('partial', function() {
  var disc = function(a, b, c) { // note disc(3, 7, 4) => 1
    return b * b - 4 * a * c;
  };
  it('caches the initially supplied arguments', function() {
    var f = R.partial(disc, [3]);
    eq(f(7, 4), 1);
    var g = R.partial(disc, [3, 7]);
    eq(g(4), 1);
  });
  it('correctly reports the arity of the new function', function() {
    var f = R.partial(disc, [3]);
    eq(f.length, 2);
    var g = R.partial(disc, [3, 7]);
    eq(g.length, 1);
  });
});
```

> path

Reason for failing:  ramda method supports negative indices

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('path', function() {
  var deepObject = {a: {b: {c: 'c'}}, falseVal: false, nullVal: null, undefinedVal: undefined, arrayVal: ['arr']};
  it('takes a path that contains negative indices into arrays', function() {
    eq(R.path(['x', -2], {x: ['a', 'b', 'c', 'd']}), 'c');
    eq(R.path([-1, 'y'], [{x: 1, y: 99}, {x: 2, y: 98}, {x: 3, y: 97}]), 97);
  });
});
```

> pipe

Reason for failing:  ramda passes context to functions | rambda composed functions have no length

```javascript
var assert = require('assert');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('pipe', function() {
  it('performs left-to-right function composition', function() {
    //  f :: (String, Number?) -> ([Number] -> [Number])
    var f = R.pipe(parseInt, R.multiply, R.map);
    eq(f.length, 2);
    eq(f('10')([1, 2, 3]), [10, 20, 30]);
    eq(f('10', 2)([1, 2, 3]), [2, 4, 6]);
  });
  it('passes context to functions', function() {
    function x(val) {
      return this.x * val;
    }
    function y(val) {
      return this.y * val;
    }
    function z(val) {
      return this.z * val;
    }
    var context = {
      a: R.pipe(x, y, z),
      x: 4,
      y: 2,
      z: 1
    };
    eq(context.a(5), 40);
  });
  it('can be applied to one argument', function() {
    var f = function(a, b, c) { return [a, b, c]; };
    var g = R.pipe(f);
    eq(g.length, 3);
    eq(g(1, 2, 3), [1, 2, 3]);
  });
});
```

> pluck

Reason for failing:  ramda method behaves as a transducer

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('pluck', function() {
  var people = [
    {name: 'Fred', age: 23},
    {name: 'Wilma', age: 21},
    {name: 'Pebbles', age: 2}
  ];
  it('behaves as a transducer when given a transducer in list position', function() {
    var numbers = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
    var transducer = R.compose(R.pluck('a'), R.map(R.add(1)), R.take(2));
    eq(R.transduce(transducer, R.flip(R.append), [], numbers), [2, 3]);
  });
});
```

> propEq

Reason for failing:  ramda method pass to `equals` method if available

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('propEq', function() {
  var obj1 = {name: 'Abby', age: 7, hair: 'blond'};
  var obj2 = {name: 'Fred', age: 12, hair: 'brown'};
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.propEq('value', 0, {value: -0}), false);
    eq(R.propEq('value', -0, {value: 0}), false);
    eq(R.propEq('value', NaN, {value: NaN}), true);
    eq(R.propEq('value', new Just([42]), {value: new Just([42])}), true);
  });
});
```

> reduce

Reason for failing:  rambda doesn't have `R.reduced` method | ramda method pass to `reduce` method

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('reduce', function() {
  var add = function(a, b) {return a + b;};
  var mult = function(a, b) {return a * b;};
  it('Prefers the use of the iterator of an object over reduce (and handles short-circuits)', function() {
    var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
    function Reducible(arr) {
      this.arr = arr;
    }
    Reducible.prototype.reduce = function(f, init) {
      var acc = init;
      for (var i = 0; i < this.arr.length; i += 1) {
        acc = f(acc, this.arr[i]);
      }
      return acc;
    };
    Reducible.prototype[symIterator] = function() {
      var a = this.arr;
      return {
        _pos: 0,
        next: function() {
          if (this._pos < a.length) {
            var v = a[this._pos];
            this._pos += 1;
            return {
              value: v,
              done: false
            };
          } else {
            return {
              done: true
            };
          }
        }
      };
    };
    var xf = R.take(2);
    var apendingT = { };
    apendingT['@@transducer/result'] = R.identity;
    apendingT['@@transducer/step'] = R.flip(R.append);
    var rfn = xf(apendingT);
    var list = new Reducible([1, 2, 3, 4, 5, 6]);
    eq(R.reduce(rfn, [], list), [1, 2]);
  });
  it('short circuits with reduced', function() {
    var addWithMaxOf10 = function(acc, val) {return acc + val > 10 ? R.reduced(acc) : acc + val;};
    eq(R.reduce(addWithMaxOf10, 0, [1, 2, 3, 4]), 10);
    eq(R.reduce(addWithMaxOf10, 0, [2, 4, 6, 8]), 6);
  });
});
```

> reject

Reason for failing:  ramda method dispatches to `filter` method

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('reject', function() {
  var even = function(x) {return x % 2 === 0;};
  it('dispatches to `filter` method', function() {
    function Nothing() {}
    Nothing.value = new Nothing();
    Nothing.prototype.filter = function() {
      return this;
    };
    function Just(x) { this.value = x; }
    Just.prototype.filter = function(pred) {
      return pred(this.value) ? this : Nothing.value;
    };
    var m = new Just(42);
    eq(R.filter(R.T, m), m);
    eq(R.filter(R.F, m), Nothing.value);
    eq(R.reject(R.T, m), Nothing.value);
    eq(R.reject(R.F, m), m);
  });
});
```

> slice

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('slice', function() {
  it('handles array-like object', function() {
    var args = (function() { return arguments; }(1, 2, 3, 4, 5));
    eq(R.slice(1, 4, args), [2, 3, 4]);
  });
});
```

> sortBy

Reason for failing:  ramda works with array-like objects

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

var albums = [
  {title: 'Art of the Fugue', artist: 'Glenn Gould', genre: 'Baroque'},
  {title: 'A Farewell to Kings', artist: 'Rush', genre: 'Rock'},
  {title: 'Timeout', artist: 'Dave Brubeck Quartet', genre: 'Jazz'},
  {title: 'Fly By Night', artist: 'Rush', genre: 'Rock'},
  {title: 'Goldberg Variations', artist: 'Daniel Barenboim', genre: 'Baroque'},
  {title: 'New World Symphony', artist: 'Leonard Bernstein', genre: 'Romantic'},
  {title: 'Romance with the Unseen', artist: 'Don Byron', genre: 'Jazz'},
  {title: 'Somewhere In Time', artist: 'Iron Maiden', genre: 'Metal'},
  {title: 'In Times of Desparation', artist: 'Danny Holt', genre: 'Modern'},
  {title: 'Evita', artist: 'Various', genre: 'Broadway'},
  {title: 'Five Leaves Left', artist: 'Nick Drake', genre: 'Folk'},
  {title: 'The Magic Flute', artist: 'John Eliot Gardiner', genre: 'Classical'}
];
describe('sortBy', function() {
  it('sorts array-like object', function() {
    var args = (function() { return arguments; }('c', 'a', 'b'));
    var result = R.sortBy(R.identity, args);
    eq(result[0], 'a');
    eq(result[1], 'b');
    eq(result[2], 'c');
  });
});
```

> startsWith

Reason for failing:  rambda doesn't support arrays

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('startsWith', function() {
  it('should return true when an array starts with the provided value', function() {
    eq(R.startsWith(['a'], ['a', 'b', 'c']), true);
  });
  it('should return true when an array starts with the provided values', function() {
    eq(R.startsWith(['a', 'b'], ['a', 'b', 'c']), true);
  });
  it('should return false when an array does not start with the provided value', function() {
    eq(R.startsWith(['b'], ['a', 'b', 'c']), false);
  });
  it('should return false when an array does not start with the provided values', function() {
    eq(R.startsWith(['b', 'c'], ['a', 'b', 'c']), false);
  });
});
```

> symmetricDifference

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('symmetricDifference', function() {
  var M = [1, 2, 3, 4];
  var M2 = [1, 2, 3, 4, 1, 2, 3, 4];
  var N = [3, 4, 5, 6];
  var N2 = [3, 3, 4, 4, 5, 5, 6, 6];
  var Z = [3, 4, 5, 6, 10];
  var Z2 = [1, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8];
  it('does not allow duplicates in the output even if the input lists had duplicates', function() {
    eq(R.symmetricDifference(M2, N2), [1, 2, 5, 6]);
  });
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.symmetricDifference([0], [-0]).length, 2);
    eq(R.symmetricDifference([-0], [0]).length, 2);
    eq(R.symmetricDifference([NaN], [NaN]).length, 0);
    eq(R.symmetricDifference([new Just([42])], [new Just([42])]).length, 0);
  });
  it('will not create a "sparse" array', function() {
    eq(R.symmetricDifference(M2, [3]).length, 3);
  });
});
```

> take

Reason for failing:  rambda doesn't have 'R.into` method

```javascript
var assert = require('assert');
var sinon = require('sinon');

var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
describe('take', function() {
  it('handles zero correctly (#1224)', function() {
    eq(R.into([], R.take(0), [1, 2, 3]), []);
  });
  it('steps correct number of times', function() {
    var spy = sinon.spy();
    R.into([], R.compose(R.map(spy), R.take(2)), [1, 2, 3]);
    sinon.assert.calledTwice(spy);
  });
  it('transducer called for every member of list if `n` is < 0', function() {
    var spy = sinon.spy();
    R.into([], R.compose(R.map(spy), R.take(-1)), [1, 2, 3]);
    sinon.assert.calledThrice(spy);
  });
});
```

> tap

Reason for failing:  ramda can act as a transducer

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');
var listXf = require('./helpers/listXf');
var _curry2 = require('rambda/internal/_curry2');

describe('tap', function() {
  var pushToList = _curry2(function(lst, x) { lst.push(x); });
  it('can act as a transducer', function() {
    var sideEffect = [];
    var numbers = [1,2,3,4,5];
    var xf = R.compose(R.map(R.identity), R.tap(pushToList(sideEffect)));
    eq(R.into([], xf, numbers), numbers);
    eq(sideEffect, numbers);
  });
  it('dispatches to transformer objects', function() {
    var sideEffect = [];
    var pushToSideEffect = pushToList(sideEffect);
    eq(R.tap(pushToSideEffect, listXf), {
      f: pushToSideEffect,
      xf: listXf
    });
  });
});
```

> toString

```javascript
var assert = require('assert');

var R = require('../../../../../rambda/dist/rambda.js');
describe('toString', function() {
  it('returns the string representation of null', function() {
    assert.strictEqual(R.toString(null), 'null');
  });
  it('returns the string representation of undefined', function() {
    assert.strictEqual(R.toString(undefined), 'undefined');
  });
  it('returns the string representation of a number primitive', function() {
    assert.strictEqual(R.toString(0), '0');
    assert.strictEqual(R.toString(-0), '-0');
    assert.strictEqual(R.toString(1.23), '1.23');
    assert.strictEqual(R.toString(-1.23), '-1.23');
    assert.strictEqual(R.toString(1e+23), '1e+23');
    assert.strictEqual(R.toString(-1e+23), '-1e+23');
    assert.strictEqual(R.toString(1e-23), '1e-23');
    assert.strictEqual(R.toString(-1e-23), '-1e-23');
    assert.strictEqual(R.toString(Infinity), 'Infinity');
    assert.strictEqual(R.toString(-Infinity), '-Infinity');
    assert.strictEqual(R.toString(NaN), 'NaN');
  });
  it('returns the string representation of a string primitive', function() {
    assert.strictEqual(R.toString('abc'), '"abc"');
    assert.strictEqual(R.toString('x "y" z'), '"x \\"y\\" z"');
    assert.strictEqual(R.toString("' '"), '"\' \'"');
    assert.strictEqual(R.toString('" "'), '"\\" \\""');
    assert.strictEqual(R.toString('\b \b'), '"\\b \\b"');
    assert.strictEqual(R.toString('\f \f'), '"\\f \\f"');
    assert.strictEqual(R.toString('\n \n'), '"\\n \\n"');
    assert.strictEqual(R.toString('\r \r'), '"\\r \\r"');
    assert.strictEqual(R.toString('\t \t'), '"\\t \\t"');
    assert.strictEqual(R.toString('\v \v'), '"\\v \\v"');
    assert.strictEqual(R.toString('\0 \0'), '"\\0 \\0"');
    assert.strictEqual(R.toString('\\ \\'), '"\\\\ \\\\"');
  });
  it('returns the string representation of a Boolean object', function() {
    assert.strictEqual(R.toString(new Boolean(true)), 'new Boolean(true)');
    assert.strictEqual(R.toString(new Boolean(false)), 'new Boolean(false)');
  });
  it('returns the string representation of a Number object', function() {
    assert.strictEqual(R.toString(new Number(0)), 'new Number(0)');
    assert.strictEqual(R.toString(new Number(-0)), 'new Number(-0)');
  });
  it('returns the string representation of a String object', function() {
    assert.strictEqual(R.toString(new String('abc')), 'new String("abc")');
    assert.strictEqual(R.toString(new String('x "y" z')), 'new String("x \\"y\\" z")');
    assert.strictEqual(R.toString(new String("' '")), 'new String("\' \'")');
    assert.strictEqual(R.toString(new String('" "')), 'new String("\\" \\"")');
    assert.strictEqual(R.toString(new String('\b \b')), 'new String("\\b \\b")');
    assert.strictEqual(R.toString(new String('\f \f')), 'new String("\\f \\f")');
    assert.strictEqual(R.toString(new String('\n \n')), 'new String("\\n \\n")');
    assert.strictEqual(R.toString(new String('\r \r')), 'new String("\\r \\r")');
    assert.strictEqual(R.toString(new String('\t \t')), 'new String("\\t \\t")');
    assert.strictEqual(R.toString(new String('\v \v')), 'new String("\\v \\v")');
    assert.strictEqual(R.toString(new String('\0 \0')), 'new String("\\0 \\0")');
    assert.strictEqual(R.toString(new String('\\ \\')), 'new String("\\\\ \\\\")');
  });
  it('returns the string representation of a Date object', function() {
    assert.strictEqual(R.toString(new Date('2001-02-03T04:05:06.000Z')), 'new Date("2001-02-03T04:05:06.000Z")');
    assert.strictEqual(R.toString(new Date('XXX')), 'new Date(NaN)');
  });
  it('returns the string representation of an array', function() {
    assert.strictEqual(R.toString([]), '[]');
    assert.strictEqual(R.toString([1, 2, 3]), '[1, 2, 3]');
    assert.strictEqual(R.toString([1, [2, [3]]]), '[1, [2, [3]]]');
    assert.strictEqual(R.toString(['x', 'y']), '["x", "y"]');
  });
  it('returns the string representation of an array with non-numeric property names', function() {
    var xs = [1, 2, 3];
    xs.foo = 0;
    xs.bar = 0;
    xs.baz = 0;
    assert.strictEqual(R.toString(xs), '[1, 2, 3, "bar": 0, "baz": 0, "foo": 0]');
  });
  it('returns the string representation of an arguments object', function() {
    assert.strictEqual(R.toString((function() { return arguments; })()), '(function() { return arguments; }())');
    assert.strictEqual(R.toString((function() { return arguments; })(1, 2, 3)), '(function() { return arguments; }(1, 2, 3))');
    assert.strictEqual(R.toString((function() { return arguments; })(['x', 'y'])), '(function() { return arguments; }(["x", "y"]))');
  });
  it('returns the string representation of a plain object', function() {
    assert.strictEqual(R.toString({}), '{}');
    assert.strictEqual(R.toString({foo: 1, bar: 2, baz: 3}), '{"bar": 2, "baz": 3, "foo": 1}');
    assert.strictEqual(R.toString({'"quoted"': true}), '{"\\"quoted\\"": true}');
    assert.strictEqual(R.toString({a: {b: {c: {}}}}), '{"a": {"b": {"c": {}}}}');
  });
  it('treats instance without custom `toString` method as plain object', function() {
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }
    assert.strictEqual(R.toString(new Point(1, 2)), '{"x": 1, "y": 2}');
  });
  it('dispatches to custom `toString` method', function() {
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }
    Point.prototype.toString = function() {
      return 'new Point(' + this.x + ', ' + this.y + ')';
    };
    assert.strictEqual(R.toString(new Point(1, 2)), 'new Point(1, 2)');
    function Just(x) {
      if (!(this instanceof Just)) {
        return new Just(x);
      }
      this.value = x;
    }
    Just.prototype.toString = function() {
      return 'Just(' + R.toString(this.value) + ')';
    };
    assert.strictEqual(R.toString(Just(42)), 'Just(42)');
    assert.strictEqual(R.toString(Just([1, 2, 3])), 'Just([1, 2, 3])');
    assert.strictEqual(R.toString(Just(Just(Just('')))), 'Just(Just(Just("")))');
    assert.strictEqual(R.toString({toString: R.always('x')}), 'x');
  });
  it('handles object with no `toString` method', function() {
    if (typeof Object.create === 'function') {
      var a = Object.create(null);
      var b = Object.create(null); b.x = 1; b.y = 2;
      assert.strictEqual(R.toString(a), '{}');
      assert.strictEqual(R.toString(b), '{"x": 1, "y": 2}');
    }
  });
  it('handles circular references', function() {
    var a = [];
    a[0] = a;
    assert.strictEqual(R.toString(a), '[<Circular>]');
    var o = {};
    o.o = o;
    assert.strictEqual(R.toString(o), '{"o": <Circular>}');
    var b = ['bee'];
    var c = ['see'];
    b[1] = c;
    c[1] = b;
    assert.strictEqual(R.toString(b), '["bee", ["see", <Circular>]]');
    assert.strictEqual(R.toString(c), '["see", ["bee", <Circular>]]');
    var p = {};
    var q = {};
    p.q = q;
    q.p = p;
    assert.strictEqual(R.toString(p), '{"q": {"p": <Circular>}}');
    assert.strictEqual(R.toString(q), '{"p": {"q": <Circular>}}');
    var x = [];
    var y = {};
    x[0] = y;
    y.x = x;
    assert.strictEqual(R.toString(x), '[{"x": <Circular>}]');
    assert.strictEqual(R.toString(y), '{"x": [<Circular>]}');
  });
});
```

> trim

Reason for failing:  ramda trims all ES5 whitespace

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('trim', function() {
  var test = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFFHello, World!\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  it('trims all ES5 whitespace', function() {
    eq(R.trim(test), 'Hello, World!');
    eq(R.trim(test).length, 13);
  });
  if (typeof String.prototype.trim !== 'function') {
    it('falls back to a shim if String.prototype.trim is not present', function() {
      eq(R.trim('   xyz  '), 'xyz');
      eq(R.trim(test), 'Hello, World!');
      eq(R.trim(test).length, 13);
      eq(R.trim('\u200b'), '\u200b');
      eq(R.trim('\u200b').length, 1);
    });
  }
});
```

> type

Reason for failing:  ramda returns 'Number' type to NaN input, while rambda returns 'NaN'

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('type', function() {
  // it('"Arguments" if given an arguments object', function() {
  //   var args = (function() { return arguments; }());
  //   eq(R.type(args), 'Arguments');
  // });
  it('"Number" if given the NaN value', function() {
    eq(R.type(NaN), 'Number');
  });
});
```

> uniq

Reason for failing:  ramda pass to `uniq` method | ramda method uses reference equality for functions

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('uniq', function() {
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.uniq([-0, -0]).length, 1);
    eq(R.uniq([0, -0]).length, 2);
    eq(R.uniq([NaN, NaN]).length, 1);
    eq(R.uniq([[1], [1]]).length, 1);
    eq(R.uniq([new Just([42]), new Just([42])]).length, 1);
  it('handles null and undefined elements', function() {
    eq(R.uniq([void 0, null, void 0, null]), [void 0, null]);
  it('uses reference equality for functions', function() {
    eq(R.uniq([R.add, R.identity, R.add, R.identity, R.add, R.identity]).length, 2);
});
```

> update

Reason for failing:  ramda accepts an array-like object

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('update', function() {
  it('accepts an array-like object', function() {
    function args() {
      return arguments;
    }
    eq(R.update(2, 4, args(0, 1, 2, 3)), [0, 1, 4, 3]);
  });
});
```

> without

Reason for failing:  ramda method act as a transducer | ramda method pass to `equals` method

```javascript
var R = require('../../../../../rambda/dist/rambda.js');
var eq = require('./shared/eq');

describe('without', function() {
  it('can act as a transducer', function() {
    eq(R.into([], R.without([1]), [1]), []);
  });
  it('has R.equals semantics', function() {
    function Just(x) { this.value = x; }
    Just.prototype.equals = function(x) {
      return x instanceof Just && R.equals(x.value, this.value);
    };
    eq(R.without([0], [-0]).length, 1);
    eq(R.without([-0], [0]).length, 1);
    eq(R.without([NaN], [NaN]).length, 0);
    eq(R.without([[1]], [[1]]).length, 0);
    eq(R.without([new Just([42])], [new Just([42])]).length, 0);
  });
});
```


</details>

> You can see them as separate files in `./files/failing_ramda_tests` directory

## API

---
#### add

> add(a: number, b: number): number

```javascript
R.add(2, 3) // =>  5
```

<details>

<summary>
R.add tests
</summary>

```javascript
import { add } from './add'

test('with number', () => {
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2'),).toEqual(3)
  expect(add(1, '2'),).toEqual(3)
  expect(add(true, false),).toEqual(1)
  expect(add(null, null),).toEqual(0)
  expect(add(undefined, undefined),).toEqual(NaN)
  expect(add(new Date(1), new Date(2)),).toEqual(3)
})

```

</details>

<details>

<summary>
R.add source
</summary>

```javascript
export function add(a, b){
  if (arguments.length === 1) return _b => add(a, _b)

  return Number(a) + Number(b)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try in REPL</a>

---
#### adjust

> adjust(i: number, replaceFn: Function, arr: T[]): T[]

It replaces `i` index in `arr` with the result of `replaceFn(arr[i])`.

```javascript
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

<details>

<summary>
R.adjust tests
</summary>

```javascript
import { add } from './add'
import { adjust } from './adjust'

const expected = [ 0, 11, 2 ]

test('without curring', () => {
  expect(adjust(
    1, add(10), [ 0, 1, 2 ]
  )).toEqual(expected)
})

test('with curring type 1 1 1', () => {
  expect(adjust(1)(add(10))([ 0, 1, 2 ])).toEqual(expected)
})

test('with curring type 1 2', () => {
  expect(adjust(1)(add(10), [ 0, 1, 2 ])).toEqual(expected)
})

test('with curring type 2 1', () => {
  expect(adjust(1, add(10))([ 0, 1, 2 ])).toEqual(expected)
})

test('with negative index', () => {
  expect(adjust(
    -2, add(10), [ 0, 1, 2 ]
  )).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [ 0, 1, 2, 3 ]
  expect(adjust(
    4, add(1), list
  ),).toEqual(list)
  expect(adjust(
    -5, add(1), list
  ),).toEqual(list)
})

```

</details>

<details>

<summary>
R.adjust source
</summary>

```javascript
import { curry } from './curry'

function adjustFn(
  index, fn, list
){
  const actualIndex = index < 0 ? list.length + index : index
  if (index >= list.length || actualIndex < 0) return list

  const clone = list.slice()
  clone[ actualIndex ] = fn(clone[ actualIndex ])

  return clone
}

export const adjust = curry(adjustFn)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0A%20%200%2C%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%20%5B0%2C%20100%5D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try in REPL</a>

---
#### all

> all(fn: Function, arr: T[]): boolean

It returns `true`, if all members of array `arr` returns `true`, when applied as argument to function `fn`.

```javascript
const arr = [ 0, 1, 2, 3, 4 ]
const fn = x => x > -1

const result = R.all(fn, arr)
// => true
```

<details>

<summary>
R.all tests
</summary>

```javascript
import { all } from './all'

const numArr = [ 0, 1, 2, 3, 4 ]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(numArr)).toBeTrue()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn, numArr)).toBeFalse()
})

test('pass index as second argument', () => {
  const indexes = []
  const fn = (x, i) => {
    indexes.push(i)

    return x > 5
  }
  all(fn, [ 10, 12, 14 ])

  expect(indexes).toEqual([ 0, 1, 2 ])
})

```

</details>

<details>

<summary>
R.all source
</summary>

```javascript
export function all(fn, list){
  if (arguments.length === 1) return _list => all(fn, _list)

  for (let i = 0; i < list.length; i++){
    if (!fn(list[ i ], i))
      return false
  }

  return true
}

```

</details>

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20fn%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(fn%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### allPass

> allPass(rules: Function[], input: any): boolean

It returns `true`, if all functions of `rules` return `true`, when `input` is their argument.

```javascript
const input = {
  a : 1,
  b : 2,
}
const rules = [
  x => x.a === 1,
  x => x.b === 2,
]
const result = R.allPass(rules)(input) // => true
```

<details>

<summary>
R.allPass tests
</summary>

```javascript
import { allPass } from './allPass'

test('happy', () => {
  const rules = [ x => typeof x === 'number', x => x > 10, x => x * 7 < 100 ]

  expect(allPass(rules)(11)).toBeTrue()

  expect(allPass(rules)(undefined)).toBeFalse()
})

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 2 ]

  expect(allPass(conditionArr)({
    a : 1,
    b : 2,
  })).toBeTrue()
})

test('when returns false', () => {
  const conditionArr = [ val => val.a === 1, val => val.b === 3 ]

  expect(allPass(conditionArr)({
    a : 1,
    b : 2,
  })).toBeFalse()
})

```

</details>

<details>

<summary>
R.allPass source
</summary>

```javascript
export function allPass(predicates){
  return input => {
    let counter = 0
    while (counter < predicates.length){
      if (!predicates[ counter ](input)){
        return false
      }
      counter++
    }

    return true
  }
}

```

</details>

<a href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20rules%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(rules)(input)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### always

> always(x: any): Function

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

console.log(fn())// => 7
```

<details>

<summary>
R.always tests
</summary>

```javascript
import { always } from './always'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})

```

</details>

<details>

<summary>
R.always source
</summary>

```javascript
export function always(x){
  return () => x
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### and

Returns `true` if both arguments are `true`; `false` otherwise.

```
R.and(true, true); // => true
R.and(true, false); // => false
R.and(false, true); // => false
R.and(false, false); // => false
```

---
#### any

> any(condition: Function, arr: T[]): boolean

It returns `true`, if at least one member of `arr` returns true, when passed to the `condition` function.

```javascript
R.any(a => a * a > 8)([1, 2, 3])
// => true
```

<details>

<summary>
R.any tests
</summary>

```javascript
import { any } from './any'

const arr = [ 1, 2 ]

test('no curry', () => {
  expect(any(val => val < 0, arr)).toBeFalse()
})

test('with curry', () => {
  expect(any(val => val < 2)(arr)).toBeTrue()
})

test('passes index to predicate', () => {
  any((x, i) => {
    expect(typeof x).toBe('string')
    expect(typeof i).toBe('number')
  })([ 'foo', 'bar' ])
})

```

</details>

<details>

<summary>
R.any source
</summary>

```javascript
export function any(fn, list){
  if (arguments.length === 1) return _list => any(fn, _list)

  let counter = 0
  while (counter < list.length){
    if (fn(list[ counter ], counter)){
      return true
    }
    counter++
  }

  return false
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.any(a%20%3D%3E%20a%20*%20a%20%3E%208)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### anyPass

> anyPass(predicates: Function[]): Function

It returns `true`, if any of `predicates` return `true` with `input` is their argument.

```javascript
const isBig = a => a > 20
const isOdd = a => a % 2 === 1

const result = R.anyPass(
  [isBig, isOdd]
)(11)
// => true
```

<details>

<summary>
R.anyPass tests
</summary>

```javascript
import { anyPass } from './anyPass'

test('happy', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTrue()
  expect(predicate(6)).toBeFalse()
})

test('happy', () => {
  const rules = [ x => typeof x === 'string', x => x > 10 ]

  expect(anyPass(rules)(11)).toBeTrue()

  expect(anyPass(rules)(undefined)).toBeFalse()
})

const obj = {
  a : 1,
  b : 2,
}

test('when returns true', () => {
  const conditionArr = [ val => val.a === 1, val => val.a === 2 ]

  expect(anyPass(conditionArr)(obj)).toBeTrue()
})

test('when returns false + curry', () => {
  const conditionArr = [ val => val.a === 2, val => val.b === 3 ]

  expect(anyPass(conditionArr)(obj)).toBeFalse()
})

test('happy', () => {
  expect(anyPass([])(3)).toEqual(false)
})

```

</details>

<details>

<summary>
R.anyPass source
</summary>

```javascript
export function anyPass(predicates){
  return input => {
    let counter = 0
    while (counter < predicates.length){
      if (predicates[ counter ](input)){
        return true
      }
      counter++
    }

    return false
  }
}

```

</details>

<a href="https://rambda.now.sh?const%20isBig%20%3D%20a%20%3D%3E%20a%20%3E%2020%0Aconst%20isOdd%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.anyPass(%0A%20%20%5BisBig%2C%20isOdd%5D%0A)(11)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### append

> append(valueToAppend: T, arr: T[]): T[]

```javascript
R.append(
  'foo',
  ['bar', 'baz']
) // => ['bar', 'baz', 'foo']
```

<details>

<summary>
R.append tests
</summary>

```javascript
import { compose, flatten, map } from '../rambda'
import { append } from './append'

test('with strings', () => {
  expect(append('o', 'fo')).toEqual('foo')
})

test('with arrays', () => {
  expect(append('tests', [ 'write', 'more' ])).toEqual([ 'write', 'more', 'tests' ])
})

test('append to empty array', () => {
  expect(append('tests', [])).toEqual([ 'tests' ])
})

test('happy', () => {
  const result = compose(flatten, map(append(0)))([ [ 1 ], [ 2 ], [ 3 ] ])
  expect(result).toEqual([ 1, 0, 2, 0, 3, 0 ])
})

test('should not modify arguments', () => {
  const a = [ 1, 2, 3 ]
  const b = append(4, a)

  expect(a).toEqual([ 1, 2, 3 ])
  expect(b).toEqual([ 1, 2, 3, 4 ])
})

```

</details>

<details>

<summary>
R.append source
</summary>

```javascript
export function append(el, list){
  if (arguments.length === 1) return _list => append(el, _list)

  if (typeof list === 'string') return `${ list }${ el }`

  const clone = list.slice()
  clone.push(el)

  return clone
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.append(%0A%20%20'foo'%2C%0A%20%20%5B'bar'%2C%20'baz'%5D%0A)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try in REPL</a>

---
#### applySpec

> applySpec(specs: object): Function

Returns a curried function with the same arity as the longest function in the spec object.
Arguments will be applied to the spec methods recursively.

Note that the currying in this function works best with functions with 4 arguments or less. (arity of 4)

```
const getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
});
getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }

const spec = {
  name: R.path('deeply.nested.object.user.firstname')
}

const json = {
  deeply: {
   nested: {
     object: {
       user: {
         firstname: 'barry'
        }
      }
    }
  }
}
const result = R.applySpec(spec, json) 
// => { name: 'barry' }
```

---
#### assoc

> assoc(prop: any, value: any, obj: object): object

Makes a shallow clone of `obj`, setting or overriding the property `prop` with
the value `value`. Note that this copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

<details>

<summary>
R.assoc tests
</summary>

```javascript
import { assoc } from './assoc'

test('adds a key to an empty object', () => {
  expect(assoc(
    'a', 1, {}
  )).toEqual({ a : 1 })
})

test('adds a key to a non-empty object', () => {
  expect(assoc(
    'b', 2, { a : 1 }
  )).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assoc('b', 2)({ a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assoc('b')(2, { a : 1 })).toEqual({
    a : 1,
    b : 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assoc('b')(2)({ a : 1 })

  expect(result).toEqual({
    a : 1,
    b : 2,
  })
})

test('changes an existing key', () => {
  expect(assoc(
    'a', 2, { a : 1 }
  )).toEqual({ a : 2 })
})

test('undefined is considered an empty object', () => {
  expect(assoc(
    'a', 1, undefined
  )).toEqual({ a : 1 })
})

test('null is considered an empty object', () => {
  expect(assoc(
    'a', 1, null
  )).toEqual({ a : 1 })
})

test('value can be null', () => {
  expect(assoc(
    'a', null, null
  )).toEqual({ a : null })
})

test('value can be undefined', () => {
  expect(assoc(
    'a', undefined, null
  )).toEqual({ a : undefined })
})

test('assignment is shallow', () => {
  expect(assoc(
    'a', { b : 2 }, { a : { c : 3 } }
  )).toEqual({ a : { b : 2 } })
})

```

</details>

<details>

<summary>
R.assoc source
</summary>

```javascript
import { curry } from './curry'

function assocFn(
  prop, val, obj
){
  return Object.assign(
    {}, obj, { [ prop ] : val }
  )
}

export const assoc = curry(assocFn)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try in REPL</a>

---
#### both

> both(firstCondition: Function, secondCondition: Function, input: any): boolean

It returns `true`, if both function `firstCondition` and function `secondCondition` return `true`, when `input` is their argument.

```javascript
const fn = R.both(
  a => a > 10,
  a => a < 20
)
console.log(fn(15)) //=> true
console.log(fn(30)) //=> false
```

<details>

<summary>
R.both tests
</summary>

```javascript
import { both } from './both'

const firstFn = val => val > 0
const secondFn = val => val < 10

test('with curry', () => {
  expect(both(firstFn)(secondFn)(17)).toBeFalse()
})

test('without curry', () => {
  expect(both(firstFn, secondFn)(7)).toBeTrue()
})

test('with multiple inputs', () => {
  const between = function(
    a, b, c
  ){ return a < b && b < c }
  const total20 = function(
    a, b, c
  ){ return a + b + c === 20 }
  const fn = both(between, total20)
  expect(fn(
    5, 7, 8
  )).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function(){ return false }
  const Z = function(){ effect = 'Z got evaluated' }
  both(F, Z)()

  expect(effect).toBe('not evaluated')
})

```

</details>

<details>

<summary>
R.both source
</summary>

```javascript
export function both(f, g){
  if (arguments.length === 1) return _g => both(f, _g)

  return (...input) => f(...input) && g(...input)
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.both(%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20a%20%3D%3E%20a%20%3C%2020%0A)%0Aconsole.log(fn(15))%20%2F%2F%3D%3E%20true%0Aconsole.log(fn(30))%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### clamp

> clamp(min: number, max: number, input:number): number

Restrict a number `input` to be withing `min` and `max` limits.
If `input` is bigger than `max`, then result is `max`.
If `input` is smaller than `min`, then result is `min`.

```
R.clamp(0, 10, 5) //=> 5
R.clamp(0, 10, -1) //=> 0
R.clamp(0, 10, 11) //=> 10
```

---
#### clone

> clone(objOrArr: T|T[]): T|T[]

Creates a deep copy of the value which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

```javascript
const objects = [{}, {}, {}];
const objectsClone = R.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
```

<details>

<summary>
R.clone tests
</summary>

```javascript
import assert from 'assert'

import { clone } from './clone'

test('with array', () => {
  const arr = [
    {
      b : 2,
      c : 'foo',
      d : [ 1, 2, 3 ],
    },
    1,
    new Date(),
    null,
  ]
  expect(clone(arr)).toEqual(arr)
})

test('with object', () => {
  const arr = {
    a : 1,
    b : 2,
    c : 3,
    d : [ 1, 2, 3 ],
    e : new Date(),
  }
  expect(clone(arr)).toEqual(arr)
})

test('with date', () => {
  const date = new Date(
    2014, 10, 14, 23, 59, 59, 999
  )

  const cloned = clone(date)
  assert.notStrictEqual(date, cloned)
  expect(cloned).toEqual(new Date(
    2014, 10, 14, 23, 59, 59, 999
  ))

  expect(cloned.getDay()).toEqual(5)
})

```

</details>

<details>

<summary>
R.clone source
</summary>

```javascript
export function clone(val){
  const out = Array.isArray(val) ? Array(val.length) : {}
  if (val && val.getTime) return new Date(val.getTime())

  for (const key in val){
    const v = val[ key ]
    out[ key ] =
      typeof v === 'object' && v !== null ?
        v.getTime ?
          new Date(v.getTime()) :
          clone(v) :
        v
  }

  return out
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20objects%20%3D%20%5B%7B%7D%2C%20%7B%7D%2C%20%7B%7D%5D%3B%0Aconst%20objectsClone%20%3D%20R.clone(objects)%3B%0Aobjects%20%3D%3D%3D%20objectsClone%3B%20%2F%2F%3D%3E%20false%0Aobjects%5B0%5D%20%3D%3D%3D%20objectsClone%5B0%5D%3B%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### compose

> compose(fn1: Function, ... , fnN: Function): any

It performs right-to-left function composition.

```javascript
const result = R.compose(
  R.map(x => x * 2),
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<details>

<summary>
R.compose tests
</summary>

```javascript
import { add, filter, last, map } from '../rambda'
import { compose } from './compose'

test('happy', () => {
  const result = compose(
    last, map(add(10)), map(add(1))
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('accepts initially two arguments', () => {
  const result = compose(map(x => x * 2),
    (a, y) => filter(x => x > y, a))([ 1, 2, 3, 4 ], 2)

  expect(result).toEqual([ 6, 8 ])
})

test('when no arguments is passed', () => {
  expect(() => compose()).toThrow('compose requires at least one argument')
})

test('ramda spec', () => {
  const f = function(
    a, b, c
  ){
    return [ a, b, c ]
  }
  const g = compose(f)
  expect(g(
    1, 2, 3
  )).toEqual([ 1, 2, 3 ])
})

```

</details>

<details>

<summary>
R.compose source
</summary>

```javascript
export function compose(...fns){
  if (fns.length === 0){
    throw new Error('compose requires at least one argument')
  }

  return (...args) => {
    const list = fns.slice()
    if (list.length > 0){
      const fn = list.pop()
      let result = fn(...args)
      while (list.length > 0){
        result = list.pop()(result)
      }

      return result
    }
  }
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### complement

> complement(fn: Function): Function

It returns `complemented` function that accept `input` as argument.

The return value of `complemented` is the negative boolean value of `fn(input)`.

```javascript
const fn = R.complement(x => !x)

const result = fn(false) // => false
```

<details>

<summary>
R.complement tests
</summary>

```javascript
import { complement } from './complement'

test('happy', () => {
  const fn = complement(x => x.length === 0)

  expect(fn([ 1, 2, 3 ])).toBeTrue()
})

test('with multiple parameters', () => {
  const between = function(
    a, b, c
  ){
    return a < b && b < c
  }
  const f = complement(between)
  expect(f(
    4, 5, 11
  )).toEqual(false)
  expect(f(
    12, 2, 6
  )).toEqual(true)
})

```

</details>

<details>

<summary>
R.complement source
</summary>

```javascript
export function complement(fn){
  return (...input) => !fn(...input)
}

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.complement(x%20%3D%3E%20!x)%0A%0Aconst%20result%20%3D%20fn(false)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### concat

> concat(x: T[]|string, y: T[]|string): T[]|string

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo')('bar') // => 'foobar'
```

<details>

<summary>
R.concat tests
</summary>

```javascript
import { concat } from './concat'

test('happy', () => {
  const arr1 = [ 'a', 'b', 'c' ]
  const arr2 = [ 'd', 'e', 'f' ]

  const a = concat(arr1, arr2)
  const b = concat(arr1)(arr2)
  const expectedResult = [ 'a', 'b', 'c', 'd', 'e', 'f' ]

  expect(a).toEqual(expectedResult)
  expect(b).toEqual(expectedResult)
})

test('with strings', () => {
  expect(concat('ABC', 'DEF')).toEqual('ABCDEF')
})

```

</details>

<details>

<summary>
R.concat source
</summary>

```javascript
export function concat(left, right){
  if (arguments.length === 1) return _right => concat(left, _right)

  return typeof left === 'string' ? `${ left }${ right }` : [ ...left, ...right ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0AR.concat('foo')('bar')%20%2F%2F%20%3D%3E%20'foobar'">Try in REPL</a>

---
#### curry

> curry(fn: Function): Function

It returns curried version of `fn`.

```javascript
const addFourNumbers = (a, b, c, d) => a + b + c + d
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1, 2)
const g = f(3)
const result = g(4) // => 10
```

<details>

<summary>
R.curry tests
</summary>

```javascript
import { curry } from './curry'

test('happy', () => {
  const addFourNumbers = (
    a, b, c, d
  ) => a + b + c + d
  const curriedAddFourNumbers = curry(addFourNumbers)
  const f = curriedAddFourNumbers(1, 2)
  const g = f(3)

  expect(g(4)).toEqual(10)
})

test('when called with more arguments', () => {
  const add = curry((n, n2) => n + n2)

  expect(add(
    1, 2, 3
  )).toEqual(3)
})

test('when called with zero arguments', () => {
  const sub = curry((a, b) => a - b)
  const s0 = sub()

  expect(s0(5, 2)).toEqual(3)
})

test('when called via multiple curry stages', () => {
  const join = curry((
    a, b, c, d
  ) => [ a, b, c, d ].join('-'))

  const stage1 = join('A')
  const stage2 = stage1('B', 'C')

  expect(stage2('D')).toEqual('A-B-C-D')
})

```

</details>

<details>

<summary>
R.curry source
</summary>

```javascript
export function curry(fn, args = []){
  return (..._args) =>
    (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([
      ...args,
      ..._args,
    ])
}

```

</details>

<a href="https://rambda.now.sh?const%20addFourNumbers%20%3D%20(a%2C%20b%2C%20c%2C%20d)%20%3D%3E%20a%20%2B%20b%20%2B%20c%20%2B%20d%0Aconst%20curriedAddFourNumbers%20%3D%20R.curry(addFourNumbers)%0Aconst%20f%20%3D%20curriedAddFourNumbers(1%2C%202)%0Aconst%20g%20%3D%20f(3)%0Aconst%20result%20%3D%20g(4)%20%2F%2F%20%3D%3E%2010">Try in REPL</a>

---
#### dec

> dec(x: number): number

It decrements a number.

```javascript
R.dec(2) // => 1
```

<details>

<summary>
R.dec tests
</summary>

```javascript
import { dec } from './dec'

test('happy', () => {
  expect(dec(2)).toBe(1)
})

```

</details>

<details>

<summary>
R.dec source
</summary>

```javascript
export const dec = n => n - 1

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dec(2)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### defaultTo

> defaultTo(defaultValue: T, ...inputArguments: any[]): T

It either returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Or it returns the first truthy `inputArguments` instance(from left to right).

```javascript
R.defaultTo('foo', undefined) // => 'foo'
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'baz') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'baz') // => 'baz'
R.defaultTo('foo', 'bar') // => 'bar'
```

<details>

<summary>
R.defaultTo tests
</summary>

```javascript
import { defaultTo } from './defaultTo'

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toEqual('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toEqual('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(NaN)).toEqual('foo')
})

test('with empty string', () => {
  expect(defaultTo('foo', '')).toEqual('')
})

test('with false', () => {
  expect(defaultTo('foo', false)).toEqual(false)
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toEqual('bar')
})

test('default extends to indefinite input arguments - case 1', () => {
  const result = defaultTo(
    'foo', null, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 2', () => {
  const result = defaultTo(
    'foo', null, NaN, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 3', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined
  )
  const expected = 'foo'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 4', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined, 'bar'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 5', () => {
  const result = defaultTo(
    'foo', null, NaN, 'bar', 'baz'
  )
  const expected = 'bar'

  expect(result).toEqual(expected)
})

test('default extends to indefinite input arguments - case 6', () => {
  const result = defaultTo(
    'foo', null, NaN, undefined, null, NaN
  )
  const expected = 'foo'

  expect(result).toEqual(expected)
})


```

</details>

<details>

<summary>
R.defaultTo source
</summary>

```javascript
function flagIs(inputArguments){
  return (
    inputArguments === undefined ||
    inputArguments === null ||
    Number.isNaN(inputArguments) === true
  )
}

export function defaultTo(defaultArgument, ...inputArguments){
  if (arguments.length === 1){
    return _inputArguments => defaultTo(defaultArgument, _inputArguments)
  } else if (arguments.length === 2){
    return flagIs(inputArguments[ 0 ]) ? defaultArgument : inputArguments[ 0 ]
  }

  const limit = inputArguments.length - 1
  let len = limit + 1
  let ready = false
  let holder

  while (!ready){
    const instance = inputArguments[ limit - len + 1 ]

    if (len === 0){
      ready = true
    } else if (flagIs(instance)){
      len -= 1
    } else {
      holder = instance
      ready = true
    }
  }

  return holder === undefined ? defaultArgument : holder
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN)%20%2F%2F%20%3D%3E%20'foo'%0AR.defaultTo('foo'%2C%20undefined%2C%20'bar'%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'baz'%0AR.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'">Try in REPL</a>

---
#### dissoc

> dissoc(prop: any, obj: object): object

It returns a new object that does not contain a `prop` property.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

<details>

<summary>
R.dissoc tests
</summary>

```javascript
import { dissoc } from './dissoc'

test('input is null or undefined', () => {
  expect(dissoc('b', null)).toEqual({})
  expect(dissoc('b', undefined)).toEqual({})
})

test('property exists curried', () => {
  expect(dissoc('b')({
    a : 1,
    b : 2,
  })).toEqual({ a : 1 })
})

test('property doesn\'t exists', () => {
  expect(dissoc('c', {
    a : 1,
    b : 2,
  })).toEqual({
    a : 1,
    b : 2,
  })
})

test('works with non-string property', () => {
  expect(dissoc(42, {
    a  : 1,
    42 : 2,
  })).toEqual({ a : 1 })

  expect(dissoc(null, {
    a    : 1,
    null : 2,
  })).toEqual({ a : 1 })

  expect(dissoc(undefined, {
    a         : 1,
    undefined : 2,
  })).toEqual({ a : 1 })
})

test('includes prototype properties', () => {
  function Rectangle(width, height){
    this.width = width
    this.height = height
  }
  const area = Rectangle.prototype.area = function(){
    return this.width * this.height
  }
  const rect = new Rectangle(7, 6)

  expect(dissoc('area', rect)).toEqual({
    width  : 7,
    height : 6,
  })

  expect(dissoc('width', rect)).toEqual({
    height : 6,
    area   : area,
  })

  expect(dissoc('depth', rect)).toEqual({
    width  : 7,
    height : 6,
    area   : area,
  })
})

```

</details>

<details>

<summary>
R.dissoc source
</summary>

```javascript
export function dissoc(prop, obj){
  if (arguments.length === 1) return _obj => dissoc(prop, _obj)

  if (obj === null || obj === undefined) return {}

  const willReturn = {}
  for (const p in obj){
    willReturn[ p ] = obj[ p ]
  }
  delete willReturn[ prop ]

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try in REPL</a>

---
#### divide

```
R.divide(71, 100) // => 0.71
```

---
#### drop

> drop(howManyToDrop: number, arrOrStr: T[]|string): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the left.

```javascript
R.drop(1, ['foo', 'bar', 'baz']) // => ['bar', 'baz']
R.drop(1, 'foo')  // => 'oo'
```

<details>

<summary>
R.drop tests
</summary>

```javascript
import assert from 'assert'

import { drop } from './drop'

test('with array', () => {
  expect(drop(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])
  expect(drop(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(drop(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
})

test('with string', () => {
  expect(drop(3, 'rambda')).toEqual('bda')
})

test('with non-positive count', () => {
  expect(drop(0, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(drop(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(drop(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('should return copy', () => {
  const xs = [ 1, 2, 3 ]

  assert.notStrictEqual(drop(0, xs), xs)
  assert.notStrictEqual(drop(-1, xs), xs)
})

```

</details>

<details>

<summary>
R.drop source
</summary>

```javascript
export function drop(n, listOrString){
  if (arguments.length === 1) return _list => drop(n, _list)

  return listOrString.slice(n > 0 ? n : 0)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.drop(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%5D%0AR.drop(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### dropLast

> dropLast(howManyToDrop: number, arrOrStr: T[]|String): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the right.

```javascript
R.dropLast(1, ['foo', 'bar', 'baz']) // => ['foo', 'bar']
R.dropLast(1, 'foo')  // => 'fo'
```

<details>

<summary>
R.dropLast tests
</summary>

```javascript
import assert from 'assert'

import { dropLast } from './dropLast'

test('with array', () => {
  expect(dropLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo' ])
  expect(dropLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([])
  expect(dropLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([])
})

test('with string', () => {
  expect(dropLast(3, 'rambda')).toEqual('ram')
})

test('with non-positive count', () => {
  expect(dropLast(0, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(dropLast(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(dropLast(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('should return copy', () => {
  const xs = [ 1, 2, 3 ]

  assert.notStrictEqual(dropLast(0, xs), xs)
  assert.notStrictEqual(dropLast(-1, xs), xs)
})

```

</details>

<details>

<summary>
R.dropLast source
</summary>

```javascript
export function dropLast(n, list){
  if (arguments.length === 1) return _list => dropLast(n, _list)

  return n > 0 ? list.slice(0, -n) : list.slice()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dropLast(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D%0AR.dropLast(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### endsWith

> endsWith(x: string, str: string): boolean

```javascript
R.endsWith(
  'bar',
  'foo-bar'
) // => true

R.endsWith(
  'foo',
  'foo-bar'
) // => false
```

<details>

<summary>
R.endsWith tests
</summary>

```javascript
import { endsWith } from './endsWith'

test('string ends with suffix', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTrue()
})

test('currying', () => {
  expect(endsWith('baz')('foo-bar')).toBeFalse()
})

test('list ends with suffix', () => {
  expect(() => endsWith([ 'c' ], [ 'a', 'b', 'c' ])).toThrow('list.endsWith is not a function')
})

```

</details>

<details>

<summary>
R.endsWith source
</summary>

```javascript
export function endsWith(suffix, list){
  if (arguments.length === 1) return _list => endsWith(suffix, _list)

  return list.endsWith(suffix)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.endsWith(%0A%20%20'bar'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20true%0A%0AR.endsWith(%0A%20%20'foo'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### either

> either(firstCondition: Function, secondCondition: Function): Function

```javascript
R.either(
  a => a > 10,
  a => a % 2 === 0
)(15) //=> true
```

<details>

<summary>
R.either tests
</summary>

```javascript
import { either } from './either'

test('with multiple inputs', () => {
  const between = function(
    a, b, c
  ){ return a < b && b < c }
  const total20 = function(
    a, b, c
  ){ return a + b + c === 20 }
  const fn = either(between, total20)
  expect(fn(
    7, 8, 5
  )).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function(){ return true }
  const Z = function(){ effect = 'Z got evaluated' }
  either(F, Z)()

  expect(effect).toBe('not evaluated')
})

test('case 1', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(either(firstFn, secondFn)(1)).toBeTrue()
})

test('case 2', () => {
  const firstFn = val => val > 0
  const secondFn = val => val === -10
  const fn = either(firstFn)(secondFn)

  expect(fn(-10)).toBeTrue()
})

```

</details>

<details>

<summary>
R.either source
</summary>

```javascript
export function either(f, g){
  if (arguments.length === 1) return _g => either(f, _g)

  return (...input) => f(...input) || g(...input)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.either(%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0A%20%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0A)(15)%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### equals

> equals(a: any, b: any): boolean

It returns equality match between `a` and `b`.

It doesn't handle cyclical data structures.

```javascript
R.equals(
  [1, {a:2}, [{b:3}]],
  [1, {a:2}, [{b:3}]]
) // => true
```

<details>

<summary>
R.equals tests
</summary>

```javascript
import { equals } from './equals'

test('happy', () => {
  const result = equals([ 1, { a : 1 }, [ { b : 3 } ] ],
    [ 1, { a : 2 }, [ { b : 3 } ] ])

  expect(result).toBeFalse()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toEqual(true)
  expect(equals(/s/, /d/)).toEqual(false)
  expect(equals(/a/gi, /a/ig)).toEqual(true)
  expect(equals(/a/mgi, /a/img)).toEqual(true)
  expect(equals(/a/gi, /a/i)).toEqual(false)
})

test('not a number', () => {
  expect(equals([ NaN ], [ NaN ])).toBe(true)
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toEqual(true)
  expect(equals(new Number(0), new Number(1))).toEqual(false)
  expect(equals(new Number(1), new Number(0))).toEqual(false)
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toEqual(true)
  expect(equals(new String(''), new String('x'))).toEqual(false)
  expect(equals(new String('x'), new String(''))).toEqual(false)
  expect(equals(new String('foo'), new String('foo'))).toEqual(true)
  expect(equals(new String('foo'), new String('bar'))).toEqual(false)
  expect(equals(new String('bar'), new String('foo'))).toEqual(false)
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toEqual(true)
  expect(equals(new Boolean(false), new Boolean(false))).toEqual(true)
  expect(equals(new Boolean(true), new Boolean(false))).toEqual(false)
  expect(equals(new Boolean(false), new Boolean(true))).toEqual(false)
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toEqual(false)
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('YYY'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('XXX'))).toEqual(true)
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toEqual(false)
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toEqual(true)
  expect(equals(new Date(1), new Date(1))).toEqual(true)
  expect(equals(new Date(0), new Date(1))).toEqual(false)
  expect(equals(new Date(1), new Date(0))).toEqual(false)
  expect(equals(new Date(0), {})).toEqual(false)
  expect(equals({}, new Date(0))).toEqual(false)
})

test('ramda spec', () => {
  expect(equals({}, {})).toEqual(true)

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 2,
  })).toEqual(true)

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    b : 3,
    a : 2,
  })).toEqual(true)

  expect(equals({
    a : 2,
    b : 3,
  },
  {
    a : 3,
    b : 3,
  })).toEqual(false)

  expect(equals({
    a : 2,
    b : 3,
    c : 1,
  },
  {
    a : 2,
    b : 3,
  })).toEqual(false)
})

test('works with boolean tuple', () => {
  expect(equals([ true, false ], [ true, false ])).toBeTrue()
  expect(equals([ true, false ], [ true, true ])).toBeFalse()
})

test('works with equal objects within array', () => {
  const objFirst = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }
  const objSecond = {
    a : {
      b : 1,
      c : 2,
      d : [ 1 ],
    },
  }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeTrue()
})

test('works with different objects within array', () => {
  const objFirst = { a : { b : 1 } }
  const objSecond = { a : { b : 2 } }

  const x = [ 1, 2, objFirst, null, '', [] ]
  const y = [ 1, 2, objSecond, null, '', [] ]
  expect(equals(x, y)).toBeFalse()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalse()

  expect(equals(undefined, undefined)).toBeTrue()
})

test('various examples', () => {
  expect(equals([ 1, 2, 3 ])([ 1, 2, 3 ])).toBeTrue()

  expect(equals([ 1, 2, 3 ], [ 1, 2 ])).toBeFalse()

  expect(equals(1, 1)).toBeTrue()

  expect(equals(1, '1')).toBeFalse()

  expect(equals({}, {})).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 2,
    a : 1,
  })).toBeTrue()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : false,
  },
  {
    a : 1,
    b : 1,
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 2,
    a : 1,
    c : 3,
  })).toBeFalse()

  expect(equals({
    x : {
      a : 1,
      b : 2,
    },
  },
  {
    x : {
      b : 2,
      a : 1,
      c : 3,
    },
  })).toBeFalse()

  expect(equals({
    a : 1,
    b : 2,
  },
  {
    b : 3,
    a : 1,
  })).toBeFalse()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 1 } } })).toBeTrue()

  expect(equals({ a : { b : { c : 1 } } }, { a : { b : { c : 2 } } })).toBeFalse()

  expect(equals({ a : {} }, { a : {} })).toBeTrue()

  expect(equals('', '')).toBeTrue()

  expect(equals('foo', 'foo')).toBeTrue()

  expect(equals('foo', 'bar')).toBeFalse()

  expect(equals(0, false)).toBeFalse()

  expect(equals(/\s/g, null)).toBeFalse()

  expect(equals(null, null)).toBeTrue()

  expect(equals(false)(null)).toBeFalse()
})

```

</details>

<details>

<summary>
R.equals source
</summary>

```javascript
import { type } from './type'

function parseError(maybeError){
  const typeofError = maybeError.__proto__.toString()
  if (![ 'Error', 'TypeError' ].includes(typeofError)) return []

  return [ typeofError, maybeError.message ]
}

function parseDate(maybeDate){
  if (!maybeDate.toDateString) return [ false ]

  return [ true, maybeDate.getTime() ]
}

function parseRegex(maybeRegex){
  if (maybeRegex.constructor !== RegExp) return [ false ]

  return [ true, maybeRegex.toString() ]
}

export function equals(a, b){
  if (arguments.length === 1) return _b => equals(a, _b)

  const aType = type(a)

  if (aType !== type(b)) return false
  if ([ 'NaN', 'Undefined', 'Null' ].includes(aType)) return true
  if ([ 'Boolean', 'Number', 'String' ].includes(aType)) return a.toString() === b.toString()

  if (aType === 'Array'){
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    if (aClone.toString() !== bClone.toString()){
      return false
    }

    let loopArrayFlag = true
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag){
        if (
          aCloneInstance !== bClone[ aCloneIndex ] &&
          !equals(aCloneInstance, bClone[ aCloneIndex ])
        ){
          loopArrayFlag = false
        }
      }
    })

    return loopArrayFlag
  }

  const aRegex = parseRegex(a)
  const bRegex = parseRegex(b)

  if (aRegex[ 0 ]){
    return bRegex[ 0 ] ? aRegex[ 1 ] === bRegex[ 1 ] : false
  } else if (bRegex[ 0 ]) return false

  const aDate = parseDate(a)
  const bDate = parseDate(b)

  if (aDate[ 0 ]){
    return bDate[ 0 ] ? aDate[ 1 ] === bDate[ 1 ] : false
  } else if (bDate[ 0 ]) return false

  const aError = parseError(a)
  const bError = parseError(b)

  if (
    aError[ 0 ]
  ){
    return bError[ 0 ] ?
      aError[ 0 ] === bError[ 0 ] && aError[ 1 ] === bError[ 1 ] :
      false
  }

  if (aType === 'Object'){
    const aKeys = Object.keys(a)

    if (aKeys.length !== Object.keys(b).length){
      return false
    }

    let loopObjectFlag = true
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag){
        const aValue = a[ aKeyInstance ]
        const bValue = b[ aKeyInstance ]

        if (aValue !== bValue && !equals(aValue, bValue)){
          loopObjectFlag = false
        }
      }
    })

    return loopObjectFlag
  }

  return false
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%0A)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### F

`R.F() // => false`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/F.js)

---
#### filter

> filter(filterFn: Function, x: Array|Object): Array|Object

It filters `x` iterable over boolean returning `filterFn`.

```javascript
const filterFn = a => a % 2 === 0

const result = R.filter(filterFn, [1, 2, 3, 4])
// => [2, 4]

const objResult = R.filter(filterFn, {a: 1, b: 2})
// => {b: 2}
```

<details>

<summary>
R.filter tests
</summary>

```javascript
import Ramda from 'ramda'

import { filter } from './filter'
import { T } from './T'

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
  expect(filter(isEven, {
    a : 1,
    b : 2,
    d : 3,
  })).toEqual({ b : 2 })
})

test('bad inputs', () => {
  expect(filter(T)(undefined)).toEqual([])
  expect(filter(T, null)).toEqual([])
  expect(() => Ramda.filter(T, null)).toThrow()
  expect(() => Ramda.filter(T, undefined)).toThrow()
})

test('predicate when input is object', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const predicate = (
    val, prop, inputObject
  ) => {
    expect(inputObject).toEqual(obj)
    expect(typeof prop).toEqual('string')

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({ a : 1 })
})

test('pass index as second argument', () => {
  let counter = 0
  filter((x, i) => {
    expect(i).toBe(counter)
    counter++
  },
  [ 10, 20, 30 ])
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b : 2,
    d : 4,
  }

  expect(result).toEqual(expectedResult)
})

```

</details>

<details>

<summary>
R.filter source
</summary>

```javascript
function filterObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    if (fn(
      obj[ prop ], prop, obj
    )){
      willReturn[ prop ] = obj[ prop ]
    }
  }

  return willReturn
}

export function filter(fn, list){
  if (arguments.length === 1) return _list => filter(fn, _list)

  if (!list) return []

  if (!Array.isArray(list)){
    return filterObject(fn, list)
  }

  let index = -1
  let resIndex = 0
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]

    if (fn(value, index)){
      willReturn[ resIndex++ ] = value
    }
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0A%0Aconst%20result%20%3D%20R.filter(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D%0A%0Aconst%20objResult%20%3D%20R.filter(filterFn%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try in REPL</a>

---
#### find

> find(findFn: Function, arr: T[]): T|undefined

It returns `undefined` or the first element of `arr` satisfying `findFn`.

```javascript
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.find(findFn, arr)
// => {foo: 1}
```

<details>

<summary>
R.find tests
</summary>

```javascript
import { find } from './find'
import { propEq } from './propEq'

test('happy', () => {
  expect(find(propEq('a', 2), [ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual({ a : 2 })
})

test('with curry', () => {
  expect(find(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.find source
</summary>

```javascript
export function find(fn, list){
  if (arguments.length === 1) return _list => find(fn, _list)

  return list.find(fn)
}

```

</details>

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try in REPL</a>

---
#### findIndex

> findIndex(findFn: Function, arr: T[]): number

It returns `-1` or the index of the first element of `arr` satisfying `findFn`.

```javascript
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(findFn, arr)
// => 1
```

<details>

<summary>
R.findIndex tests
</summary>

```javascript
import { findIndex } from './findIndex'
import { propEq } from './propEq'

test('happy', () => {
  expect(findIndex(propEq('a', 2))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(1)

  expect(findIndex(propEq('a', 1))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(0)

  expect(findIndex(propEq('a', 4))([ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual(-1)
})

test('pass index as second argument', () => {
  findIndex((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  })([ 10, 12, 15 ])
})

```

</details>

<details>

<summary>
R.findIndex source
</summary>

```javascript
export function findIndex(fn, list){
  if (arguments.length === 1) return _list => findIndex(fn, _list)

  const len = list.length
  let index = -1

  while (++index < len){
    if (fn(list[ index ], index)){
      return index
    }
  }

  return -1
}

```

</details>

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### findLast

> findLast(findFn: Function, arr: T[]): T|undefined

It returns `undefined` or the last element of `arr` satisfying `findFn`.

```javascript
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findLast(findFn, arr)
// => {foo: 1}
```

<details>

<summary>
R.findLast tests
</summary>

```javascript
import { findLast } from './findLast'

test('happy', () => {
  const result = findLast((x, i) => {
    expect(typeof i).toBe('number')

    return x > 1
  }, [ 1, 1, 1, 2, 3, 4, 1 ])
  expect(result).toEqual(4)

  expect(findLast(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toEqual(0)
})

test('with curry', () => {
  expect(findLast(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toEqual(4)
})

const obj1 = { x : 100 }
const obj2 = { x : 200 }
const a = [ 11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0 ]
const even = function(x){ return x % 2 === 0 }
const gt100 = function(x){ return x > 100 }
const isStr = function(x){ return typeof x === 'string' }
const xGt100 = function(o){ return o && o.x > 100 }

test('ramda 1', () => {
  expect(findLast(even, a)).toEqual(0)
  expect(findLast(gt100, a)).toEqual(300)
  expect(findLast(isStr, a)).toEqual('cow')
  expect(findLast(xGt100, a)).toEqual(obj2)
})

test('ramda 2', () => {
  expect(findLast(even, [ 'zing' ])).toEqual(undefined)
})

test('ramda 3', () => {
  expect(findLast(even, [ 2, 3, 5 ])).toEqual(2)
})

test('ramda 4', () => {
  expect(findLast(even, [])).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.findLast source
</summary>

```javascript
export function findLast(fn, list){
  if (arguments.length === 1) return _list => findLast(fn, _list)

  let index = list.length

  while (--index >= 0){
    if (fn(list[ index ], index)){
      return list[ index ]
    }
  }

  return undefined
}

```

</details>

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLast(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try in REPL</a>

---
#### findLastIndex

> findLastIndex(findFn: Function, arr: T[]): number

It returns `-1` or the last index of the first element of `arr` satisfying `findFn`.

```javascript
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findLastIndex(findFn, arr)
// => 1
```

<details>

<summary>
R.findLastIndex tests
</summary>

```javascript
import { findLastIndex } from './findLastIndex'

test('happy', () => {
  const result = findLastIndex((x, i) => {
    expect(typeof i).toBe('number')

    return x > 1
  }, [ 1, 1, 1, 2, 3, 4, 1 ])

  expect(result).toEqual(5)

  expect(findLastIndex(x => x === 0, [ 0, 1, 1, 2, 3, 4, 1 ])).toEqual(0)
})

test('with curry', () => {
  expect(findLastIndex(x => x > 1)([ 1, 1, 1, 2, 3, 4, 1 ])).toEqual(5)
})

const obj1 = { x : 100 }
const obj2 = { x : 200 }
const a = [ 11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0 ]
const even = function(x){
  return x % 2 === 0
}
const gt100 = function(x){
  return x > 100
}
const isStr = function(x){
  return typeof x === 'string'
}
const xGt100 = function(o){
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLastIndex(even, a)).toEqual(15)
  expect(findLastIndex(gt100, a)).toEqual(9)
  expect(findLastIndex(isStr, a)).toEqual(3)
  expect(findLastIndex(xGt100, a)).toEqual(10)
})

test('ramda 2', () => {
  expect(findLastIndex(even, [ 'zing' ])).toEqual(-1)
})

test('ramda 3', () => {
  expect(findLastIndex(even, [ 2, 3, 5 ])).toEqual(0)
})

test('ramda 4', () => {
  expect(findLastIndex(even, [])).toEqual(-1)
})

```

</details>

<details>

<summary>
R.findLastIndex source
</summary>

```javascript
export function findLastIndex(fn, list){
  if (arguments.length === 1) return _list => findLastIndex(fn, _list)

  let index = list.length

  while (--index >= 0){
    if (fn(list[ index ], index)){
      return index
    }
  }

  return -1
}

```

</details>

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLastIndex(findFn%2C%20arr)%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### flatten

> flatten(arr: any[]): any[]

```javascript
R.flatten([ 1, [ 2, [ 3 ] ] ])
// => [ 1, 2, 3 ]
```

<details>

<summary>
R.flatten tests
</summary>

```javascript
import { flatten } from './flatten'

test('happy', () => {
  expect(flatten([ 1, 2, 3, [ [ [ [ [ 4 ] ] ] ] ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ 3 ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, [ 2, [ [ [ 3 ] ] ] ], [ 4 ] ])).toEqual([ 1, 2, 3, 4 ])

  expect(flatten([ 1, 2, [ 3, 4 ], 5, [ 6, [ 7, 8, [ 9, [ 10, 11 ], 12 ] ] ] ])).toEqual([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ])
})

```

</details>

<details>

<summary>
R.flatten source
</summary>

```javascript
export function flatten(list, input){
  const willReturn = input === undefined ? [] : input

  for (let i = 0; i < list.length; i++){
    if (Array.isArray(list[ i ])){
      flatten(list[ i ], willReturn)
    } else {
      willReturn.push(list[ i ])
    }
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%201%2C%20%5B%202%2C%20%5B%203%20%5D%20%5D%20%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%20%5D">Try in REPL</a>

---
#### flip

> flip(fn: Function): Function

It returns function which calls `fn` with exchanged first and second argument.

```javascript
const subtractFlip = R.flip(R.subtract)

const result = subtractFlip(1,7)
// => 6
```

<details>

<summary>
R.flip tests
</summary>

```javascript
import { flip } from './flip'
import { subtract } from './subtract'

test('flip', () => {
  const fn = flip(subtract)

  expect(fn(1)(7)).toEqual(6)
  expect(fn(1, 7)).toEqual(6)
  expect(fn(
    1, 7, 9
  )).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.flip source
</summary>

```javascript
function flipExport(fn){
  return (...input) => {
    if (input.length === 1){
      return holder => fn(holder, input[ 0 ])
    } else if (input.length === 2){
      return fn(input[ 1 ], input[ 0 ])
    }

    return undefined
  }
}

export function flip(fn){
  return flipExport(fn)
}

```

</details>

<a href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20subtractFlip(1%2C7)%0A%2F%2F%20%3D%3E%206">Try in REPL</a>

---
#### forEach

> forEach(fn: Function, x: Array|Object): Array|Object

It applies function `fn` over all members of iterable `x` and returns `x`.

```javascript
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

console.log(sideEffect) //=> {foo1 : 1, foo2 : 2}
console.log(result) //=> [1, 2]
```

<details>

<summary>
R.forEach tests
</summary>

```javascript
import { forEach } from './forEach'
import { type } from './type'

test('iterate over object', () => {
  const obj = {
    a : 1,
    b : [ 1, 2 ],
    c : { d : 7 },
    f : 'foo',
  }
  const result = {}
  const returned = forEach((
    val, prop, inputObj
  ) => {
    expect(type(inputObj)).toBe('Object')
    result[ prop ] = `${ prop }-${ type(val) }`
  })(obj)

  const expected = {
    a : 'a-Number',
    b : 'b-Array',
    c : 'c-Object',
    f : 'f-String',
  }

  expect(result).toEqual(expected)
  expect(returned).toEqual(obj)
})

test('happy', () => {
  const sideEffect = {}
  forEach(x => sideEffect[ `foo${ x }` ] = x + 10)([ 1, 2 ])

  expect(sideEffect).toEqual({
    foo1 : 11,
    foo2 : 12,
  })
})

test('happy 2', () => {
  const list = [
    {
      x : 1,
      y : 2,
    },
    {
      x : 100,
      y : 200,
    },
    {
      x : 300,
      y : 400,
    },
    {
      x : 234,
      y : 345,
    },
  ]
  const sideEffect = {}
  const result = forEach(elem => {
    sideEffect[ elem.x ] = elem.y
  }, list)
  const expectedSideEffect = {
    1   : 2,
    100 : 200,
    300 : 400,
    234 : 345,
  }

  expect(sideEffect).toEqual(expectedSideEffect)
  expect(result).toEqual(list)
})

test('with empty list', () => {
  const list = []
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('returns the input', () => {
  const list = [ 1, 2, 3 ]
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('pass index as second argument', () => {
  const list = [ 11, 21, 31 ]
  const indexes = []
  const result = forEach((x, i) => indexes.push(i))(list)

  expect(indexes).toEqual([ 0, 1, 2 ])
})

```

</details>

<details>

<summary>
R.forEach source
</summary>

```javascript
import { map } from './map'

export function forEach(fn, list){
  if (arguments.length === 1) return _list => forEach(fn, _list)

  map(fn, list)

  return list
}

```

</details>

<a href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0Aconsole.log(sideEffect)%20%2F%2F%3D%3E%20%7Bfoo1%20%3A%201%2C%20foo2%20%3A%202%7D%0Aconsole.log(result)%20%2F%2F%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### fromPairs

> fromPairs(list: any[]): object

It transforms a list to an object.

```javascript
const list = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(list)
// expected === result
```

<details>

<summary>
R.fromPairs tests
</summary>

```javascript
import { fromPairs } from './fromPairs'

const list = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

test('happy', () => {
  expect(fromPairs(list)).toEqual(expected)
})

```

</details>

<details>

<summary>
R.fromPairs source
</summary>

```javascript
export function fromPairs(list){
  const toReturn = {}
  list.forEach(([ prop, value ]) => toReturn[ prop ] = value)

  return toReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20list%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.fromPairs(list)%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

---
#### groupBy

> groupBy(fn: Function, arr: Array): Object

It groups array `arr` by provided selector function `fn`.

```
R.groupBy(
  x => x.length,
  [ 'a', 'b', 'aa', 'bb' ]
)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

---
#### groupWith

> groupWith(fn: Function, arr: Array): Object

It creates a groups of array members defined by equality function `fn`.

```
const list = [ 4, 3, 6, 2, 2, 1 ]
const result = R.groupWith(
  (a,b) => a - b === 0,
  list
)
const expected = [
  [ 4, 3 ],
  [ 6 ],
  [ 2 ],
  [ 2, 1 ],
]
// result === expected
```

---
#### has

> has(prop: string, obj: Object): boolean

- It returns `true` if `obj` has property `prop`.

```javascript
R.has('a', {a: 1}) // => true
R.has('b', {a: 1}) // => false
```

<details>

<summary>
R.has tests
</summary>

```javascript
import { has } from './has'

test('happy', () => {
  expect(has('a')({ a : 1 })).toBeTrue()
  expect(has('b', { a : 1 })).toBeFalse()
})

test('with non-object', () => {
  expect(has('a', undefined)).toEqual(false)
  expect(has('a', null)).toEqual(false)
  expect(has('a', true)).toEqual(false)
  expect(has('a', '')).toEqual(false)
  expect(has('a', /a/)).toEqual(false)
})

```

</details>

<details>

<summary>
R.has source
</summary>

```javascript
export function has(prop, obj){
  if (arguments.length === 1) return _obj => has(prop, _obj)

  if (!obj) return false

  return obj[ prop ] !== undefined
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.has('a'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20true%0AR.has('b'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### head

> head(arrOrStr: T[]|string): T|string

It returns the first element of `arrOrStr`.

```javascript
R.head([1, 2, 3]) // => 1
R.head('foo') // => 'f'
```

<details>

<summary>
R.head tests
</summary>

```javascript
import { head } from './head'

test('head', () => {
  expect(head([ 'fi', 'fo', 'fum' ])).toEqual('fi')
  expect(head([])).toEqual(undefined)
  expect(head('foo')).toEqual('f')
  expect(head('')).toEqual('')
})

```

</details>

<details>

<summary>
R.head source
</summary>

```javascript
export function head(list){
  if (typeof list === 'string') return list[ 0 ] || ''

  return list[ 0 ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.head(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%201%0AR.head('foo')%20%2F%2F%20%3D%3E%20'f'">Try in REPL</a>

---
#### identical

> identical(a: any, b: any): boolean

Returns true if its arguments are identical, false otherwise. Values are identical if they reference the same memory. NaN is identical to NaN; 0 and -0 are not identical.

```javascript
const o = {};
R.identical(o, o); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

<details>

<summary>
R.identical tests
</summary>

```javascript
import { F, T } from '../rambda.js'
import { identical } from './identical'
import { _isInteger } from './internal/_isInteger'
import { _objectIs } from './internal/_objectIs'

test('with boolean', () => {
  expect(F()).toBe(false)
  expect(T()).toBe(true)
})

test('internal isInteger', () => {
  expect(_isInteger(1)).toBe(true)
  expect(_isInteger(0.3)).toBe(false)
})

test('internal objectIs', () => {
  expect(_objectIs(1, 1)).toBe(true)
  expect(_objectIs(NaN, NaN)).toBe(true)
})

test('identical', () => {
  const a = {}

  expect(identical(100)(100)).toEqual(true)
  expect(identical(100, '100')).toEqual(false)
  expect(identical('string', 'string')).toEqual(true)
  expect(identical([], [])).toEqual(false)
  expect(identical(a, a)).toEqual(true)
  expect(identical(undefined, undefined)).toEqual(true)
  expect(identical(null, undefined)).toEqual(false)
})

```

</details>

<details>

<summary>
R.identical source
</summary>

```javascript
import _objectIs from './internal/_objectIs'

export function identical(a, b){
  if (arguments.length === 1) return _b => identical(a, _b)

  return _objectIs(a, b)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20o%20%3D%20%7B%7D%3B%0AR.identical(o%2C%20o)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### identity

> identity(x: T): T

It just passes back the supplied arguments.

```javascript
R.identity(7) // => 7
```

<details>

<summary>
R.identity tests
</summary>

```javascript
import { identity } from './identity'

test('happy', () => {
  expect(identity(7)).toEqual(7)
  expect(identity(true)).toEqual(true)
  expect(identity({ a : 1 })).toEqual({ a : 1 })
})

```

</details>

<details>

<summary>
R.identity source
</summary>

```javascript
export function identity(x){
  return x
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### ifElse

> ifElse(condition: Function|boolean, ifFn: Function, elseFn: Function): Function

It returns another function. When this new function is called with `input` argument, it will return either `ifFn(input)` or `elseFn(input)` depending on `condition(input)` evaluation.

```javascript
const fn = R.ifElse(
 x => x > 10,
 x => x*2,
 x => x*10
)

const result = fn(8)
// => 80
```

<details>

<summary>
R.ifElse tests
</summary>

```javascript
import { always, has, identity, prop } from '../rambda'
import { ifElse } from './ifElse'

const condition = has('foo')
const v = function(a){
  return typeof a === 'number'
}
const t = function(a){
  return a + 1
}
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('happy', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toEqual(16)
  expect(ifIsNumber(t, identity)('hello')).toEqual('hello')
})

test('pass all arguments', () => {
  const identity = function(a){
    return a
  }
  const v = function(){
    return true
  }
  const onTrue = function(a, b){
    expect(a).toEqual(123)
    expect(b).toEqual('abc')
  }
  ifElse(
    v, onTrue, identity
  )(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toEqual(true)
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(
    false, always(true), always(false)
  )

  expect(fn()).toEqual(false)
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({ foo : 'bar' })).toEqual(3)
  expect(fn({ fo : 'bar' })).toEqual(false)
})

```

</details>

<details>

<summary>
R.ifElse source
</summary>

```javascript
import { curry } from './curry'

function ifElseFn(
  condition, onTrue, onFalse
){

  return (...input) => {
    const conditionResult = typeof condition === 'boolean' ? condition : condition(...input)

    if (conditionResult === true){
      return onTrue(...input)
    }

    return onFalse(...input)
  }
}

export const ifElse = curry(ifElseFn)

```

</details>

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0A%20x%20%3D%3E%20x%20%3E%2010%2C%0A%20x%20%3D%3E%20x*2%2C%0A%20x%20%3D%3E%20x*10%0A)%0A%0Aconst%20result%20%3D%20fn(8)%0A%2F%2F%20%3D%3E%2080">Try in REPL</a>

---
#### inc

> inc(x: number): number

It increments a number.

```javascript
R.inc(1) // => 2
```

<details>

<summary>
R.inc tests
</summary>

```javascript
import { inc } from './inc'

test('happy', () => {
  expect(inc(1)).toBe(2)
})

```

</details>

<details>

<summary>
R.inc source
</summary>

```javascript
export const inc = n => n + 1

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### includes

> includes(valueToFind: T|string, input: T[]|string): boolean

If `input` is string, then this method work as native `includes`.
If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```javascript
R.includes('oo', 'foo') // => true
R.includes({a: 1}, [{a: 1}]) // => true
```

<details>

<summary>
R.includes tests
</summary>

```javascript
import R from 'ramda'

import { includes } from './includes'

test('includes with string', () => {
  const str = 'more is less'

  expect(includes('less')(str)).toBeTrue()
  expect(R.includes('less')(str)).toBeTrue()
  expect(includes('never', str)).toBeFalse()
  expect(R.includes('never', str)).toBeFalse()
})

test('includes with array', () => {
  const arr = [ 1, 2, 3 ]

  expect(includes(2)(arr)).toBeTrue()
  expect(R.includes(2)(arr)).toBeTrue()

  expect(includes(4, arr)).toBeFalse()
  expect(R.includes(4, arr)).toBeFalse()
})

test('return false if input is falsy', () => {
  expect(includes(2, null)).toBeFalse()
  expect(() => R.includes(2, null)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of null')
  expect(includes(4, undefined)).toBeFalse()
  expect(() => R.includes(4, undefined)).toThrowWithMessage(TypeError,
    'Cannot read property \'indexOf\' of undefined')
})

```

</details>

<details>

<summary>
R.includes source
</summary>

```javascript
import { equals } from './equals'

export function includes(target, list){
  if (arguments.length === 1) return _input => includes(target, _input)

  if (typeof list === 'string'){
    return list.includes(target)
  }
  if (!Array.isArray(list)) return false

  let index = -1

  while (++index < list.length){
    if (equals(list[ index ], target)){
      return true
    }
  }

  return false
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.includes('oo'%2C%20'foo')%20%2F%2F%20%3D%3E%20true%0AR.includes(%7Ba%3A%201%7D%2C%20%5B%7Ba%3A%201%7D%5D)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### indexBy

> indexBy(condition: Function|String, arr: T[]): Object

Generates object with properties provided by `condition` and values provided by `arr`. If `condition` is a string, then it is passed to `R.path`.

```javascript
const arr = [ {id: 1}, {id: 2} ]
const result = R.indexBy(
  x => x.id,
  arr
)
const pathResult = R.indexBy(
  'id',
  arr
)
// => { 1: {id: 1}, 2: {id: 2} }
// pathResult === result
```

<details>

<summary>
R.indexBy tests
</summary>

```javascript
import { indexBy } from './indexBy'
import { prop } from './prop'

test('happy', () => {
  const list = [
    { id : 1 },
    {
      id : 1,
      a  : 2,
    },
    { id : 2 },
    { id : 10 },
    { id : 'a' },
  ]

  expect(indexBy(prop('id'))(list)).toEqual({
    1 : {
      id : 1,
      a  : 2,
    },
    2  : { id : 2 },
    10 : { id : 10 },
    a  : { id : 'a' },
  })
})

test('with string as condition', () => {
  const list = [ { id : 1 }, { id : 2 }, { id : 10 }, { id : 'a' } ]
  const standardResult = indexBy(obj => obj.id, list)
  const suggestionResult = indexBy('id', list)

  expect(standardResult).toEqual(suggestionResult)
})

test('with string - bad path', () => {
  const list = [
    {
      a : {
        b : 1,
        c : 2,
      },
    },
    { a : { c : 4 } },
    {},
    {
      a : {
        b : 10,
        c : 20,
      },
    },
  ]

  const result = indexBy('a.b', list)
  const expected = {
    1 : {
      a : {
        b : 1,
        c : 2,
      },
    },
    10 : {
      a : {
        b : 10,
        c : 20,
      },
    },
    undefined : {},
  }

  expect(result).toEqual(expected)
})

```

</details>

<details>

<summary>
R.indexBy source
</summary>

```javascript
import { path } from './path'

function indexByPath(pathInput, list){
  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ path(pathInput, item) ] = item
  }

  return toReturn
}

export function indexBy(fnOrPath, list){
  if (arguments.length === 1){
    return _list => indexBy(fnOrPath, _list)
  }

  if (typeof fnOrPath === 'string'){
    return indexByPath(fnOrPath, list)
  }

  const toReturn = {}
  for (let i = 0; i < list.length; i++){
    const item = list[ i ]
    toReturn[ fnOrPath(item) ] = item
  }

  return toReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%20%7Bid%3A%201%7D%2C%20%7Bid%3A%202%7D%20%5D%0Aconst%20result%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20arr%0A)%0Aconst%20pathResult%20%3D%20R.indexBy(%0A%20%20'id'%2C%0A%20%20arr%0A)%0A%2F%2F%20%3D%3E%20%7B%201%3A%20%7Bid%3A%201%7D%2C%202%3A%20%7Bid%3A%202%7D%20%7D%0A%2F%2F%20pathResult%20%3D%3D%3D%20result">Try in REPL</a>

---
#### indexOf

> indexOf(valueToFind: any, arr: T[]): number

It returns `-1` or the index of the first element of `arr` equal of `valueToFind`.

```javascript
R.indexOf(1, [1, 2]) // => 0
R.indexOf(0, [1, 2]) // => -1
```

<details>

<summary>
R.indexOf tests
</summary>

```javascript
import { indexOf } from './indexOf'

test('indexOf', () => {
  expect(indexOf(3, [ 1, 2, 3, 4 ])).toEqual(2)

  expect(indexOf(10)([ 1, 2, 3, 4 ])).toEqual(-1)
})

```

</details>

<details>

<summary>
R.indexOf source
</summary>

```javascript
export function indexOf(target, list){
  if (arguments.length === 1) return _list => indexOf(target, _list)

  let index = -1
  const { length } = list

  while (++index < length){
    if (list[ index ] === target){
      return index
    }
  }

  return -1
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.indexOf(1%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%200%0AR.indexOf(0%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### init

> init(arrOrStr: T[]|string): T[]|string

- It returns all but the last element of `arrOrStr`.

```javascript
R.init([1, 2, 3])  // => [1, 2]
R.init('foo')  // => 'fo'
```

<details>

<summary>
R.init tests
</summary>

```javascript
import { compose, flatten, tail } from '../rambda'
import { init } from './init'

test('init', () => {
  expect(compose(
    tail, init, flatten
  )([ [ [ 1, [ 2 ] ] ], [ 3, 4 ] ])).toEqual([ 2, 3 ])

  expect(init([ 1, 2, 3 ])).toEqual([ 1, 2 ])
  expect(init([ 1, 2 ])).toEqual([ 1 ])
  expect(init([ 1 ])).toEqual([])
  expect(init([])).toEqual([])

  expect(init([])).toEqual([])

  expect(init([ 1 ])).toEqual([])

  expect(init('foo')).toEqual('fo')

  expect(init('f')).toEqual('')

  expect(init('')).toEqual('')
})

```

</details>

<details>

<summary>
R.init source
</summary>

```javascript
import baseSlice from './internal/baseSlice'

export function init(list){
  if (typeof list === 'string') return list.slice(0, -1)

  return list.length ? baseSlice(
    list, 0, -1
  ) : []
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.init(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D%0AR.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### is

> is(xPrototype: any, x: any): boolean

It returns `true` is `x` is instance of `xPrototype`.

```javascript
R.is(String, 'foo')  // => true
R.is(Array, 1)  // => false
```

<details>

<summary>
R.is tests
</summary>

```javascript
import { is } from './is'

test('works with built-in types', () => {
  expect(is(Array, undefined)).toBeFalse()
  expect(is(Array)([])).toBeTrue()
  expect(is(Boolean, new Boolean(false))).toBeTrue()
  expect(is(Date, new Date())).toBeTrue()
  expect(is(Function, () => {})).toBeTrue()
  expect(is(Number, new Number(0))).toBeTrue()
  expect(is(Object, {})).toBeTrue()
  expect(is(RegExp, /(?:)/)).toBeTrue()
  expect(is(String, new String(''))).toBeTrue()
})

test('works with user-defined types', () => {
  function Foo(){}
  function Bar(){}
  Bar.prototype = new Foo()

  const foo = new Foo()
  const bar = new Bar()

  expect(is(Foo, foo)).toBeTrue()
  expect(is(Bar, bar)).toBeTrue()
  expect(is(Foo, bar)).toBeTrue()
  expect(is(Bar, foo)).toBeFalse()
})

test('does not coerce', () => {
  expect(is(Boolean, 1)).toBeFalse()
  expect(is(Number, '1')).toBeFalse()
  expect(is(Number, false)).toBeFalse()
})

test('recognizes primitives as their object equivalents', () => {
  expect(is(Boolean, false)).toBeTrue()
  expect(is(Number, 0)).toBeTrue()
  expect(is(String, '')).toBeTrue()
})

test('does not consider primitives to be instances of Object', () => {
  expect(is(Object, false)).toBeFalse()
  expect(is(Object, 0)).toBeFalse()
  expect(is(Object, '')).toBeFalse()
})

```

</details>

<details>

<summary>
R.is source
</summary>

```javascript
export function is(ctor, val){
  if (arguments.length === 1) return _val => is(ctor, _val)

  return (
    val != null && val.constructor === ctor ||
    val instanceof ctor
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.is(String%2C%20'foo')%20%20%2F%2F%20%3D%3E%20true%0AR.is(Array%2C%201)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isNil

> isNil(x: any): boolean

It returns `true` is `x` is either `null` or `undefined`.

```javascript
R.isNil(null)  // => true
R.isNil(1)  // => false
```

<details>

<summary>
R.isNil tests
</summary>

```javascript
import { isNil } from './isNil'

test('happy', () => {
  expect(isNil(null)).toBeTrue()

  expect(isNil(undefined)).toBeTrue()

  expect(isNil([])).toBeFalse()
})

```

</details>

<details>

<summary>
R.isNil source
</summary>

```javascript
export function isNil(x){
  return x === undefined || x === null
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isNil(null)%20%20%2F%2F%20%3D%3E%20true%0AR.isNil(1)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isEmpty

> isEmpty(x: any): boolean

It returns `true` is `x` is `empty`.

```javascript
R.isEmpty('')  // => true
R.isEmpty({ x : 0 })  // => false
```

<details>

<summary>
R.isEmpty tests
</summary>

```javascript
import { isEmpty } from './isEmpty'

test('happy', () => {
  expect(isEmpty(undefined)).toEqual(false)
  expect(isEmpty('')).toEqual(true)
  expect(isEmpty(null)).toEqual(false)
  expect(isEmpty(' ')).toEqual(false)
  expect(isEmpty(new RegExp(''))).toEqual(false)
  expect(isEmpty([])).toEqual(true)
  expect(isEmpty([ [] ])).toEqual(false)
  expect(isEmpty({})).toEqual(true)
  expect(isEmpty({ x : 0 })).toEqual(false)
  expect(isEmpty(0)).toEqual(false)
  expect(isEmpty(NaN)).toEqual(false)
  expect(isEmpty([ '' ])).toEqual(false)
})

```

</details>

<details>

<summary>
R.isEmpty source
</summary>

```javascript
import { type } from './type.js'

export function isEmpty(input){
  const inputType = type(input)
  if ([ 'Undefined', 'NaN', 'Number', 'Null' ].includes(inputType)) return false
  if (!input) return true

  if (inputType === 'Object'){
    return Object.keys(input).length === 0
  }

  if (inputType === 'Array'){
    return input.length === 0
  }

  return false
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isEmpty('')%20%20%2F%2F%20%3D%3E%20true%0AR.isEmpty(%7B%20x%20%3A%200%20%7D)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### join

> join(separator: string, arr: T[]): string

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<details>

<summary>
R.join tests
</summary>

```javascript
import { join } from './join'

test('curry', () => {
  expect(join('|')([ 'foo', 'bar', 'baz' ])).toEqual('foo|bar|baz')

  expect(join('|', [ 1, 2, 3 ])).toEqual('1|2|3')

  const spacer = join(' ')

  expect(spacer([ 'a', 2, 3.4 ])).toEqual('a 2 3.4')
})

```

</details>

<details>

<summary>
R.join source
</summary>

```javascript
export function join(separator, list){
  if (arguments.length === 1) return _list => join(separator, _list)

  return list.join(separator)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try in REPL</a>

---
#### keys

> keys(x: Object): string[]

```javascript
R.keys({a:1, b:2})  // => ['a', 'b']
```

<details>

<summary>
R.keys tests
</summary>

```javascript
import { keys } from './keys.js'

test('happy', () => {
  expect(keys({ a : 1 })).toEqual([ 'a' ])
})

```

</details>

<details>

<summary>
R.keys source
</summary>

```javascript
export function keys(obj){
  return Object.keys(obj)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try in REPL</a>

---
#### last

> last(arrOrStr: T[]|string): T|string

It returns the last element of `arrOrStr`.

```javascript
R.last(['foo', 'bar', 'baz']) // => 'baz'
R.last('foo') // => 'o'
```

<details>

<summary>
R.last tests
</summary>

```javascript
import { last } from './last'

test('happy', () => {
  expect(last([ 'foo', 'bar', 'baz' ])).toEqual('baz')
  expect(last([])).toEqual(undefined)
  expect(last('abc')).toEqual('c')
  expect(last('')).toEqual('')
})

```

</details>

<details>

<summary>
R.last source
</summary>

```javascript
export function last(list){
  if (typeof list === 'string') return list[ list.length - 1 ] || ''

  return list[ list.length - 1 ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.last(%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20'baz'%0AR.last('foo')%20%2F%2F%20%3D%3E%20'o'">Try in REPL</a>

---
#### lastIndexOf

> lastIndexOf(x: any, arr: T[]): number

It returns the last index of `x` in array `arr`.

`R.equals` is used to determine equality between `x` and members of `arr`.

Value `-1` is returned if no `x` is found in `arr`.

```javascript
R.lastIndexOf(1, [1, 2, 3, 1, 2]) // => 3
R.lastIndexOf(10, [1, 2, 3, 1, 2]) // => -1
```

<details>

<summary>
R.lastIndexOf tests
</summary>

```javascript
import { lastIndexOf } from './lastIndexOf'

test('happy', () => {
  const a = lastIndexOf(1, [ 1, 2, 3, 1, 2 ])
  const b = lastIndexOf(1)([ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(3)
  expect(b).toEqual(3)
})

test('false', () => {
  const a = lastIndexOf(10, [ 1, 2, 3, 1, 2 ])

  expect(a).toEqual(-1)
})

```

</details>

<details>

<summary>
R.lastIndexOf source
</summary>

```javascript
import { equals } from './equals'

export function lastIndexOf(target, list){
  if (arguments.length === 1) return _list => lastIndexOf(target, _list)

  let index = list.length

  while (--index > 0){
    if (equals(list[ index ], target)){
      return index
    }
  }

  return -1
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.lastIndexOf(1%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%203%0AR.lastIndexOf(10%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### length

> length(arrOrStr: Array|String): Number

```javascript
R.length([1, 2, 3]) // => 3
```

<details>

<summary>
R.length tests
</summary>

```javascript
import { length } from './length'

test('happy', () => {
  expect(length('foo')).toEqual(3)
  expect(length([ 1, 2, 3 ])).toEqual(3)
  expect(length([])).toEqual(0)
})

test('with bad input returns NaN', () => {
  expect(length(0)).toBeNaN()
  expect(length({})).toBeNaN()
  expect(length(null)).toBeNaN()
  expect(length(undefined)).toBeNaN()
})

```

</details>

<details>

<summary>
R.length source
</summary>

```javascript
export function length(list){
  if (!list || list.length === undefined){
    return NaN
  }

  return list.length
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.length(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%203">Try in REPL</a>

---
#### lens

> lens(getter: Function, setter: Function): Lens

Returns a `lens` for the given `getter` and `setter` functions. 

The `getter` "gets" the value of the focus; the `setter` "sets" the value of the focus. 

The setter should not mutate the data structure.

```
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2}) //=> 1
R.set(xLens, 4, {x: 1, y: 2}) //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) //=> {x: -1, y: 2}
```

---
#### lensIndex

> lensIndex(index: Number): Lens

Returns a lens that focuses on the specified index

```
const headLens = R.lensIndex(0)

R.view(headLens, ['a', 'b', 'c']) //=> 'a'
R.set(headLens, 'x', ['a', 'b', 'c']) //=> ['x', 'b', 'c']
R.over(headLens, R.toUpper, ['a', 'b', 'c']) //=> ['A', 'b', 'c']
```

---
#### lensPath

> lensPath(path: Array|String): Lens

Returns a lens that focuses on the specified path

```
const xHeadYLens = R.lensPath(['x', 0, 'y'])

R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> 2
R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]}) //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```

---
#### lensProp

> lensProp(prop: String): Lens

Returns a lens that focuses on the specified property

```
const xLens = R.lensProp('x');

R.view(xLens, {x: 1, y: 2}) //=> 1
R.set(xLens, 4, {x: 1, y: 2}) //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) //=> {x: -1, y: 2}
```

---
#### map

> map(mapFn: Function, x: Array|Object): Array|Object

It returns the result of looping through iterable `x` with `mapFn`.

The method works with objects as well.

Note that unlike Ramda's `map`, here array keys are passed as second argument to `mapFn`.

```javascript
const mapFn = x => x * 2
const resultWithArray = R.map(mapFn, [1, 2, 3])
// => [2, 4, 6]

const result = R.map((val, prop)=>{
  return `${prop}-${val}`
}, {a: 1, b: 2})
// => {a: 'a-1', b: 'b-2'}
```

<details>

<summary>
R.map tests
</summary>

```javascript
import { add, compose } from '../rambda'
import { map } from './map'

const double = x => x * 2

const sampleObject = {
  a : 1,
  b : 2,
  c : 3,
  d : 4,
}

test('with array', () => {
  expect(map(double, [ 1, 2, 3 ])).toEqual([ 2, 4, 6 ])
})

test('pass index as second argument', () => {
  let counter = 0
  map((x, i) => {
    expect(i).toBe(counter)
    counter++
  },
  [ 10, 20, 30 ])
})

test('with object', () => {
  const obj = {
    a : 1,
    b : 2,
  }

  expect(map(double, obj)).toEqual({
    a : 2,
    b : 4,
  })
})

test('pass input object as third argument', () => {
  const obj = {
    a : 1,
    b : 2,
  }
  const iterator = (
    val, prop, inputObject
  ) => {
    expect(inputObject).toEqual(obj)

    return val * 2
  }
  expect(map(iterator, obj)).toEqual({
    a : 2,
    b : 4,
  })
})

test('with object passes property as second argument', () => {
  map((_, prop) => {
    expect(typeof prop).toEqual('string')
  })(sampleObject)
})

test('map with index example', () => {
  const mappedWithIndex = (fn, obj) => {
    let counter = -1

    return map((...inputs) => {
      counter++

      return fn(...inputs, counter)
    }, obj)
  }
  const fn = (
    x, prop, obj, index
  ) => {
    expect(index).toBeNumber()

    return x + 1
  }
  const result = mappedWithIndex(fn, {
    a : 1,
    b : 2,
  })
  expect(result).toEqual({
    a : 2,
    b : 3,
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined instead of array', () => {
  expect(map(double, undefined)).toEqual([])
})

test('with R.compose', () => {
  const result = compose(map(add(1)), map(add(1)))([ 1, 2, 3 ])
  expect(result).toEqual([ 3, 4, 5 ])
})

```

</details>

<details>

<summary>
R.map source
</summary>

```javascript
function mapObject(fn, obj){
  const willReturn = {}

  for (const prop in obj){
    willReturn[ prop ] = fn(
      obj[ prop ], prop, obj
    )
  }

  return willReturn
}

export function map(fn, list){
  if (arguments.length === 1) return _list => map(fn, _list)

  if (list === undefined){
    return []
  }
  if (!Array.isArray(list)){
    return mapObject(fn, list)
  }

  let index = -1
  const len = list.length
  const willReturn = Array(len)

  while (++index < len){
    willReturn[ index ] = fn(list[ index ], index)
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20mapFn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20resultWithArray%20%3D%20R.map(mapFn%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%2C%206%5D%0A%0Aconst%20result%20%3D%20R.map((val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try in REPL</a>

---
#### match

> match(regExpression: Regex, str: string): string[]

```javascript
R.match(/([a-z]a)/g, 'bananas') // => ['ba', 'na', 'na']
```

<details>

<summary>
R.match tests
</summary>

```javascript
import { match } from './match'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual([ 'ar', 'az' ])

  expect(match(/a./g)('foo')).toEqual([])

  expect(() => {
    match(/a./g, null)
  }).toThrowWithMessage(TypeError, 'Cannot read property \'match\' of null')
})

```

</details>

<details>

<summary>
R.match source
</summary>

```javascript
export function match(pattern, str){
  if (arguments.length === 1) return _str => match(pattern, _str)

  const willReturn = str.match(pattern)

  return willReturn === null ? [] : willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%20%2F%2F%20%3D%3E%20%5B'ba'%2C%20'na'%2C%20'na'%5D">Try in REPL</a>

---
#### max

> max(x: Number|String, y: Number|String): Number|String

```javascript
R.max(5,7) // => 7
```

<details>

<summary>
R.max tests
</summary>

```javascript
import { max } from './max'

test('max', () => {
  expect(max(2, 1)).toBe(2)
})

```

</details>

<details>

<summary>
R.max source
</summary>

```javascript
export function max(a, b){
  if (arguments.length === 1) return _b => max(a, _b)

  return b > a ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.max(5%2C7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### maxBy

> maxBy(fn: Function, x: Number|String, y: Number|String): Number|String

```javascript
R.maxBy(Math.abs, 5, -7) // => -7
```

<details>

<summary>
R.maxBy tests
</summary>

```javascript
import { maxBy } from './maxBy'

test('1', () => {
  expect(maxBy(
    Math.round, 0.66, 0.77
  )).toEqual(0.66)
})

test('2', () => {
  expect(maxBy(
    Math.round, 0.77, 0.66
  )).toEqual(0.77)
})

test('3', () => {
  expect(maxBy(Math.round)(0.77, 0.66)).toEqual(0.77)
})

test('4', () => {
  expect(maxBy(Math.round, 0.77)(0.66)).toEqual(0.77)
})

test('5', () => {
  expect(maxBy(
    x => x === 1 ? -1 : 1, 1, 0.66
  )).toEqual(0.66)
})

```

</details>

<details>

<summary>
R.maxBy source
</summary>

```javascript
export function maxBy(
  fn, a, b
){
  if (arguments.length === 2){
    return _b => maxBy(
      fn, a, _b
    )
  } else if (arguments.length === 1){
    return (_a, _b) => maxBy(
      fn, _a, _b
    )
  }

  return fn(b) > fn(a) ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.maxBy(Math.abs%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try in REPL</a>

---
#### merge

> merge(a: Object, b: Object)

It returns result of `Object.assign({}, a, b)`.

```javascript
R.merge({ 'foo': 0, 'bar': 1 }, { 'foo': 7 })
// => { 'foo': 7, 'bar': 1 }
```

<details>

<summary>
R.merge tests
</summary>

```javascript
import { merge } from './merge'

const sample = {
  foo : 'bar',
  bar : 'bar',
}

test('merge', () => {
  expect(merge(sample)({ bar : 'baz' })).toEqual({
    foo : 'bar',
    bar : 'baz',
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(merge(null, undefined)).toEqual({})
  expect(merge(sample, null)).toEqual(sample)
  expect(merge(sample, undefined)).toEqual(sample)
  expect(merge(undefined, sample)).toEqual(sample)
})

```

</details>

<details>

<summary>
R.merge source
</summary>

```javascript
export function merge(obj, props){
  if (arguments.length === 1) return _props => merge(obj, _props)

  return Object.assign(
    {}, obj || {}, props || {}
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.merge(%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%2C%20%7B%20'foo'%3A%207%20%7D)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try in REPL</a>

---
#### min

> min(x: Number|String, y: Number|String): Number|String

```javascript
R.min(5,7) // => 5
```

<details>

<summary>
R.min tests
</summary>

```javascript
import { min } from './min'

test('happy', () => {
  expect(min(2, 1)).toBe(1)
  expect(min(2)(1)).toBe(1)
})

```

</details>

<details>

<summary>
R.min source
</summary>

```javascript
export function min(a, b){
  if (arguments.length === 1) return _b => min(a, _b)

  return b < a ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.min(5%2C7)%20%2F%2F%20%3D%3E%205">Try in REPL</a>

---
#### minBy

> minBy(fn: Function, x: Number|String, y: Number|String): Number|String

```javascript
R.minBy(Math.abs, -5, -7) // => -5
```

<details>

<summary>
R.minBy tests
</summary>

```javascript
import { minBy } from './minBy'

test('1', () => {
  expect(minBy(
    Math.round, 0.66, 0.77
  )).toEqual(0.66)
})

test('2', () => {
  expect(minBy(
    Math.round, 0.77, 0.66
  )).toEqual(0.77)
})

test('3', () => {
  expect(minBy(Math.round)(0.77, 0.66)).toEqual(0.77)
})

test('4', () => {
  expect(minBy(Math.round, 0.77)(0.66)).toEqual(0.77)
})

test('5', () => {
  expect(minBy(
    x => x === 1 ? -1 : 1, 1, 0.66
  )).toEqual(1)
})

```

</details>

<details>

<summary>
R.minBy source
</summary>

```javascript
export function minBy(
  fn, a, b
){
  if (arguments.length === 2){
    return _b => minBy(
      fn, a, _b
    )
  } else if (arguments.length === 1){
    return (_a, _b) => minBy(
      fn, _a, _b
    )
  }

  return fn(b) < fn(a) ? b : a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.minBy(Math.abs%2C%20-5%2C%20-7)%20%2F%2F%20%3D%3E%20-5">Try in REPL</a>

---
#### modulo

> modulo(a: number, b: number):numberNumber

It returns the remainder of operation `a/b`.

```javascript
R.module(14, 3) // => 2
```

<details>

<summary>
R.modulo tests
</summary>

```javascript
import { modulo } from './modulo'

test('happy', () => {
  expect(modulo(17, 3)).toEqual(2)
  expect(modulo(15)(6)).toEqual(3)
})

```

</details>

<details>

<summary>
R.modulo source
</summary>

```javascript
export function modulo(a, b){
  if (arguments.length === 1) return _b => modulo(a, _b)

  return a % b
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.module(14%2C%203)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### multiply

> multiply(a: number, b: number): number

It returns the result of operation `a*b`.

```javascript
R.multiply(4, 3) // => 12
```

<details>

<summary>
R.multiply tests
</summary>

```javascript
import { multiply } from './multiply'

test('happy', () => {
  expect(multiply(2, 4)).toEqual(8)
  expect(multiply(2)(4)).toEqual(8)
})

```

</details>

<details>

<summary>
R.multiply source
</summary>

```javascript
export function multiply(a, b){
  if (arguments.length === 1) return _b => multiply(a, _b)

  return a * b
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(4%2C%203)%20%2F%2F%20%3D%3E%2012">Try in REPL</a>

---
#### not

> not(x: any): boolean

It returns inverted boolean version of input `x`.

```javascript
R.not(true) //=> false
R.not(false) //=> true
R.not(0) //=> true
R.not(1) //=> false
```

<details>

<summary>
R.not tests
</summary>

```javascript
import { not } from './not'

test('not', () => {
  expect(not(false)).toEqual(true)
  expect(not(true)).toEqual(false)
  expect(not(0)).toEqual(true)
  expect(not(1)).toEqual(false)
})

```

</details>

<details>

<summary>
R.not source
</summary>

```javascript
export function not(a){
  return !a
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.not(true)%20%2F%2F%3D%3E%20false%0AR.not(false)%20%2F%2F%3D%3E%20true%0AR.not(0)%20%2F%2F%3D%3E%20true%0AR.not(1)%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### omit

> omit(propsToOmit: string[]|string, obj: Object): Object

It returns a partial copy of an `obj` with omitting `propsToOmit`

```javascript
R.omit('a,c,d', {a: 1, b: 2, c: 3}) // => {b: 2}
```

<details>

<summary>
R.omit tests
</summary>

```javascript
import { omit } from './omit'

test('with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = omit('a,c', obj)
  const resultCurry = omit('a,c')(obj)
  const expectedResult = { b : 2 }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with null', () => {
  expect(omit('a,b', null)).toEqual(undefined)
})

test('doesn\'t work with number as property', () => {
  expect(omit([ 42 ], {
    a  : 1,
    42 : 2,
  })).toEqual({
    42 : 2,
    a  : 1,
  })
})

test('happy', () => {
  expect(omit([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ b : 'bar' })
})

```

</details>

<details>

<summary>
R.omit source
</summary>

```javascript
export function omit(keys, obj){
  if (arguments.length === 1) return _obj => omit(keys, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }

  const keysValue =
    typeof keys === 'string' ? keys.split(',') : keys

  const willReturn = {}

  for (const key in obj){
    if (!keysValue.includes(key)){
      willReturn[ key ] = obj[ key ]
    }
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.omit('a%2Cc%2Cd'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%20%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try in REPL</a>

---
#### over

> over(lens: Lens, f: Function, target: Array|Object): Array|Object

Returns a copied `Object` or `Array` with the modified value resulting from the function applying to the lenses focus.

```
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) //=> ['FOO', 'bar', 'baz']
```

---
#### path

> path(pathToSearch: string[]|string, obj: Object): any

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

```javascript
R.path('a.b', {a: {b: 1}}) // => 1
```

<details>

<summary>
R.path tests
</summary>

```javascript
import { path } from './path'

test('with array inside object', () => {
  const obj = { a : { b : [ 1, { c : 1 } ] } }

  expect(path('a.b.1.c', obj)).toBe(1)
})

test('works with undefined', () => {
  const obj = { a : { b : { c : 1 } } }

  expect(path('a.b.c.d.f', obj)).toBeUndefined()
  expect(path('foo.babaz', undefined)).toBeUndefined()
  expect(path('foo.babaz')(undefined)).toBeUndefined()
})

test('works with string instead of array', () => {
  expect(path('foo.bar.baz')({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')
})

test('path', () => {
  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : { baz : 'yes' } } })).toEqual('yes')

  expect(path([ 'foo', 'bar', 'baz' ])(null)).toBeUndefined()

  expect(path([ 'foo', 'bar', 'baz' ])({ foo : { bar : 'baz' } })).toBeUndefined()
})

```

</details>

<details>

<summary>
R.path source
</summary>

```javascript
export function path(list, obj){
  if (arguments.length === 1) return _obj => path(list, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  let willReturn = obj
  let counter = 0

  const pathArrValue = typeof list === 'string' ? list.split('.') : list

  while (counter < pathArrValue.length){
    if (willReturn === null || willReturn === undefined){
      return undefined
    }
    willReturn = willReturn[ pathArrValue[ counter ] ]
    counter++
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.path('a.b'%2C%20%7Ba%3A%20%7Bb%3A%201%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### paths

> paths(paths: string[][]|string[], obj: Object): Array

Similar to `R.path`, but for multiple object's path queries. 

```
const obj = {
  foo: {
    bar: [10,20],
    baz: '123'
  },
  a: 90
}
R.paths(['a.b', 'foo.bar.1', 'foo.baz'])
// => [ undefined, 20, 123]
```

---
#### pathOr

> pathOr(defaultValue: any, pathToSearch: string[]|string, obj: Object): any

`pathFound` is the result of calling `R.path(pathToSearch, obj)`.

If `pathFound` is `undefined`, `null` or `NaN`, then `defaultValue` will be returned.

`pathFound` is returned in any other case.

```javascript
R.pathOr(1, 'a.b', {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'b'], {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'c'], {a: {b: 2}}) // => 1
```

<details>

<summary>
R.pathOr tests
</summary>

```javascript
import { pathOr } from './pathOr'

test('with undefined', () => {
  const result = pathOr(
    'foo', 'x.y', { x : { y : 1 } }
  )

  expect(result).toEqual(1)
})

test('with null', () => {
  const result = pathOr(
    'foo', 'x.y', null
  )

  expect(result).toEqual('foo')
})

test('with NaN', () => {
  const result = pathOr(
    'foo', 'x.y', NaN
  )

  expect(result).toEqual('foo')
})

test('curry case (x)(y)(z)', () => {
  const result = pathOr('foo')('x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})

test('curry case (x)(y,z)', () => {
  const result = pathOr('foo', 'x.y.z')({ x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})

test('curry case (x,y)(z)', () => {
  const result = pathOr('foo')('x.y.z', { x : { y : { a : 1 } } })

  expect(result).toEqual('foo')
})

```

</details>

<details>

<summary>
R.pathOr source
</summary>

```javascript
import { curry } from './curry'
import { defaultTo } from './defaultTo'
import { path } from './path'

function pathOrRaw(
  defaultValue, list, obj
){
  return defaultTo(defaultValue,
    path(list, obj))
}

export const pathOr = curry(pathOrRaw)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pathOr(1%2C%20'a.b'%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%202%0AR.pathOr(1%2C%20%5B'a'%2C%20'b'%5D%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%202%0AR.pathOr(1%2C%20%5B'a'%2C%20'c'%5D%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### partial

> partial(fn: Function, ...inputs: any[]): Function | any

It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.

```
const fn = (salutation, title, firstName, lastName) => salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

const canPassAnyNumberOfArguments = partial(fn, 'Hello', 'Ms.')
const finalFn = canPassAnyNumberOfArguments('foo')

finalFn('bar') // =>  'Hello, Ms. foo bar!'
```

---
#### pick

> pick(propsToPick: string[], obj: Object): Object

It returns a partial copy of an `obj` containing only `propsToPick` properties.

```javascript
R.pick(['a', 'c'], {a: 1, b: 2}) // => {a: 1}
```

<details>

<summary>
R.pick tests
</summary>

```javascript
import { pick } from './pick'

test('pick with string as condition', () => {
  const obj = {
    a : 1,
    b : 2,
    c : 3,
  }
  const result = pick('a,c', obj)
  const resultCurry = pick('a,c')(obj)
  const expectedResult = {
    a : 1,
    c : 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('pick', () => {
  expect(pick([ 'a', 'c' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({
    a : 'foo',
    c : 'baz',
  })

  expect(pick([ 'a', 'd', 'e', 'f' ])({
    a : 'foo',
    b : 'bar',
    c : 'baz',
  })).toEqual({ a : 'foo' })

  expect(pick('a,d,e,f')(null)).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.pick source
</summary>

```javascript
export function pick(keys, obj){
  if (arguments.length === 1) return _obj => pick(keys, _obj)

  if (obj === null || obj === undefined){
    return undefined
  }
  const keysValue =
    typeof keys === 'string' ? keys.split(',') : keys

  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length){
    if (keysValue[ counter ] in obj){
      willReturn[ keysValue[ counter ] ] = obj[ keysValue[ counter ] ]
    }
    counter++
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pick(%5B'a'%2C%20'c'%5D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Ba%3A%201%7D">Try in REPL</a>

---
#### pipe

> pipe(fn1: Function, ... , fnN: Function): any

It performs left-to-right function composition.

```javascript
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<details>

<summary>
R.pipe tests
</summary>

```javascript
import { add, last, map } from '../rambda'
import { pipe } from './pipe'

test('pipe', () => {
  const result = pipe(
    map(add(1)), map(add(10)), last
  )([ 1, 2, 3 ])

  expect(result).toEqual(14)
})

test('with bad input', () => {
  expect(() => pipe()).toThrow('pipe requires at least one argument')
})

```

</details>

<details>

<summary>
R.pipe source
</summary>

```javascript
import { compose } from './compose'

export function pipe(...fns){
  if (fns.length === 0) throw new Error('pipe requires at least one argument')

  return compose(...fns.reverse())
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### pluck

> pluck(property: string, arr: Object[]): any[]

It returns list of the values of `property` taken from the objects in array of objects `arr`.

```javascript
R.pluck('a')([{a: 1}, {a: 2}, {b: 3}]) // => [1, 2]
```

<details>

<summary>
R.pluck tests
</summary>

```javascript
import { pluck } from './pluck'

test('happy', () => {
  expect(pluck('a')([ { a : 1 }, { a : 2 }, { b : 1 } ])).toEqual([ 1, 2 ])
})

test('with number', () => {
  const input = [ [ 1, 2 ], [ 3, 4 ] ]

  expect(pluck(0, input)).toEqual([ 1, 3 ])
})

```

</details>

<details>

<summary>
R.pluck source
</summary>

```javascript
import { map } from './map'

export function pluck(key, list){
  if (arguments.length === 1) return _list => pluck(key, _list)

  const willReturn = []

  map(val => {
    if (val[ key ] !== undefined){
      willReturn.push(val[ key ])
    }
  }, list)

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pluck('a')(%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### prepend

> prepend(x: T, arr: T[]): T[]

It adds `x` to the start of the array `arr`.

```javascript
R.prepend('foo', ['bar', 'baz']) // => ['foo', 'bar', 'baz']
```

<details>

<summary>
R.prepend tests
</summary>

```javascript
import { prepend } from './prepend'

test('happy', () => {
  expect(prepend('f', 'oo')).toEqual('foo')
})

test('prepend', () => {
  expect(prepend('yes', [ 'foo', 'bar', 'baz' ])).toEqual([
    'yes',
    'foo',
    'bar',
    'baz',
  ])

  expect(prepend('foo')([])).toEqual([ 'foo' ])
})

```

</details>

<details>

<summary>
R.prepend source
</summary>

```javascript
export function prepend(el, list){
  if (arguments.length === 1) return _list => prepend(el, _list)

  if (typeof list === 'string') return `${ el }${ list }`

  const clone = [ el ].concat(list)

  return clone
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prepend('foo'%2C%20%5B'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D">Try in REPL</a>

---
#### prop

> prop(propToFind: string, obj: Object): any

It returns `undefined` or the value of property `propToFind` in `obj`

```javascript
R.prop('x', {x: 100}) // => 100
R.prop('x', {a: 1}) // => undefined
```

<details>

<summary>
R.prop tests
</summary>

```javascript
import { prop } from './prop'

test('prop', () => {
  expect(prop('foo')({ foo : 'baz' })).toEqual('baz')

  expect(prop('bar')({ foo : 'baz' })).toEqual(undefined)

  expect(prop('bar')(null)).toEqual(undefined)
})

```

</details>

<details>

<summary>
R.prop source
</summary>

```javascript
export function prop(key, obj){
  if (arguments.length === 1) return _obj => prop(key, _obj)

  if (!obj) return undefined

  return obj[ key ]
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%20%2F%2F%20%3D%3E%20100%0AR.prop('x'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20undefined">Try in REPL</a>

---
#### propEq

> propEq(propToFind: string, valueToMatch: any, obj: Object): boolean

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```javascript
const propToFind = 'foo'
const valueToMatch = 0

const result = R.propEq(propToFind, valueToMatch)({foo: 0})
// => true
```

<details>

<summary>
R.propEq tests
</summary>

```javascript
import { propEq } from './propEq'

test('propEq', () => {
  expect(propEq('foo', 'bar')({ foo : 'bar' })).toBeTrue()

  expect(propEq('foo', 'bar')({ foo : 'baz' })).toBeFalse()

  expect(propEq('foo')('bar')({ foo : 'baz' })).toBeFalse()
})

test('happy', () => {
  expect(propEq(
    'name', 'Abby', null
  )).toEqual(false)
// expect(propEq('name', 'Abby', undefined)).toEqual(false)
})

```

</details>

<details>

<summary>
R.propEq source
</summary>

```javascript
import { curry } from './curry'

function propEqFn(
  key, val, obj
){
  if (!obj) return false

  return obj[ key ] === val
}

export const propEq = curry(propEqFn)

```

</details>

<a href="https://rambda.now.sh?const%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%200%0A%0Aconst%20result%20%3D%20R.propEq(propToFind%2C%20valueToMatch)(%7Bfoo%3A%200%7D)%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### propIs

> propIs(type: any, name: string, obj: Object): boolean

It Returns `true` if the specified object property is of the given type.

```javascript
R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
R.propIs(Number, 'x', {x: 'foo'});    //=> false
R.propIs(Number, 'x', {});            //=> false
```

<details>

<summary>
R.propIs tests
</summary>

```javascript
import { propIs } from './propIs'

test('1', () => {
  expect(propIs(
    Number, 'value', { value : 1 }
  )).toEqual(true)
})

test('2', () => {
  expect(propIs(
    String, 'value', { value : 1 }
  )).toEqual(false)
})

test('3', () => {
  expect(propIs(String)('value')({})).toEqual(false)
})

```

</details>

<details>

<summary>
R.propIs source
</summary>

```javascript
import { curry } from './curry.js'
import { is } from './is'

function propIsFn(
  type, name, obj
){
  return is(type, obj[ name ])
}

export const propIs = curry(propIsFn)

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.propIs(Number%2C%20'x'%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%3B%20%20%2F%2F%3D%3E%20true%0AR.propIs(Number%2C%20'x'%2C%20%7Bx%3A%20'foo'%7D)%3B%20%20%20%20%2F%2F%3D%3E%20false%0AR.propIs(Number%2C%20'x'%2C%20%7B%7D)%3B%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### propOr

> propOr(defaultValue: any, param: string, obj: Object): any

If the given, non-null object has an own property with the specified name, returns the value of that property. Otherwise returns the provided default value.

```
const theWall = { mother: 'Waters', comfortablyNumb: 'Gilmour/Waters' }
const authorOfWishYouWereHere = R.prop('wishYouWereHere')
const authorOfAtomHeartMotherWhenDefault = R.propOr('Pink Floyd', 'atomHeartMother')

authorOfWishYouWereHere(theWall)  //=> undefined
authorOfAtomHeartMotherWhenDefault(theWall) //=> 'Pink Floyd'
```

---
#### range

> range(start: number, end: number): number[]

It returns a array of numbers from `start`(inclusive) to `end`(exclusive).

```javascript
R.range(0, 3)   // => [0, 1, 2]
```

<details>

<summary>
R.range tests
</summary>

```javascript
import { range } from './range'

test('happy', () => {
  expect(range(0, 10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

test('end range is bigger than start range', () => {
  expect(range(7, 3)).toEqual([])
  expect(range(5, 5)).toEqual([])
})

test('with bad input', () => {
  expect(() => range('a', 6)).toThrow('Both arguments to range must be numbers')
  expect(() => range(6, 'z')).toThrow('Both arguments to range must be numbers')

})

test('curry', () => {
  expect(range(0)(10)).toEqual([ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ])
})

```

</details>

<details>

<summary>
R.range source
</summary>

```javascript
export function range(from, to){
  if (arguments.length === 1) return _to => range(from, _to)

  if (Number.isNaN(Number(from)) || Number.isNaN(Number(to))){
    throw new TypeError('Both arguments to range must be numbers')
  }

  if (to < from) return []

  const len = to - from
  const willReturn = Array(len)

  for (let i = 0; i < len; i++){
    willReturn[ i ] = from + i
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%203)%20%20%20%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%5D">Try in REPL</a>

---
#### reduce

> reduce(iteratorFn: Function, accumulator: any, array: T[]): any

```javascript
const iteratorFn = (acc, val) => acc + val
const result = R.reduce(iteratorFn, 1, [1, 2, 3])
// => 7
```

<details>

<summary>
R.reduce tests
</summary>

```javascript
import { compose, curry, map } from '../rambda'
import { reduce } from './reduce'

test('happy', () => {
  const result = reduce((
    acc, val, i
  ) => {
    expect(typeof i).toBe('number')

    return acc + val
  })(1)([ 1, 2, 3 ])

  expect(result).toEqual(7)
})

test('with compose', () => {
  const convertToString = (acc, value) => acc + value

  expect(compose(reduce(convertToString, ''),
    map(x => x + 1))([ 1, 2, 3 ])).toEqual('234')
})

test('with curry', () => {
  const add = curry((n, n2) => n + n2)

  expect(reduce(
    add, 0, [ 1, 2, 3 ]
  )).toEqual(6)
})

```

</details>

<details>

<summary>
R.reduce source
</summary>

```javascript
import { curry } from './curry'

function reduceFn(
  fn, acc, list
){
  return list.reduce(fn, acc)
}

export const reduce = curry(reduceFn)

```

</details>

<a href="https://rambda.now.sh?const%20iteratorFn%20%3D%20(acc%2C%20val)%20%3D%3E%20acc%20%2B%20val%0Aconst%20result%20%3D%20R.reduce(iteratorFn%2C%201%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### reject

> reject(filterFn: Function, arr: T[]): T[]

It has the opposite effect of `R.filter`.

It will return those members of `arr` that return `false` when applied to function `filterFn`.

```javascript
const filterFn = x => x % 2 === 1

const result = R.reject(filterFn, [1, 2, 3, 4])
// => [2, 4]
```

<details>

<summary>
R.reject tests
</summary>

```javascript
import { add, compose, equals, map } from '../rambda'
import { reject } from './reject'

const isOdd = n => n % 2 === 1

test('with array', () => {
  expect(reject(isOdd, [ 1, 2, 3, 4 ])).toEqual([ 2, 4 ])
})

test('with object', () => {
  expect(reject(isOdd, {
    a : 1,
    b : 2,
    c : 3,
    d : 4,
  })).toEqual({
    b : 2,
    d : 4,
  })
})

test('should work with currying', () => {
  const result = compose(reject(equals(2)),
    map(add(1)))({
    a : 1,
    b : 2,
    c : 3,
  })

  expect(result).toEqual({
    b : 3,
    c : 4,
  })
})

test('pass index as second argument', () => {
  reject((x, i) => {
    expect(typeof x).toBe('number')
    expect(typeof i).toBe('number')
  })([ 10, 12, 15 ])
})

```

</details>

<details>

<summary>
R.reject source
</summary>

```javascript
import { filter } from './filter'

export function reject(fn, list){
  if (arguments.length === 1) return _list => reject(fn, _list)

  return filter((x, i) => !fn(x, i), list)
}

```

</details>

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0A%0Aconst%20result%20%3D%20R.reject(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try in REPL</a>

---
#### repeat

> repeat(valueToRepeat: T, num: number): T[]

```javascript
R.repeat('foo', 2) // => ['foo', 'foo']
```

<details>

<summary>
R.repeat tests
</summary>

```javascript
import { repeat } from './repeat'

test('repeat', () => {
  expect(repeat('')(3)).toEqual([ '', '', '' ])
  expect(repeat('foo', 3)).toEqual([ 'foo', 'foo', 'foo' ])

  const obj = {}
  const arr = repeat(obj, 3)

  expect(arr).toEqual([ {}, {}, {} ])

  expect(arr[ 0 ] === arr[ 1 ]).toBeTrue()
})

```

</details>

<details>

<summary>
R.repeat source
</summary>

```javascript
export function repeat(val, n){
  if (arguments.length === 1) return _n => repeat(val, _n)

  const willReturn = Array(n)

  return willReturn.fill(val)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%202)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%5D">Try in REPL</a>

---
#### replace

> replace(strOrRegex: string|Regex, replacer: string, str: string): string

It replaces `strOrRegex` found in `str` with `replacer`.

```javascript
R.replace('foo', 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/, 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/g, 'bar', 'foo foo') // => 'bar bar'
```

<details>

<summary>
R.replace tests
</summary>

```javascript
import { replace } from './replace'

test('happy', () => {
  expect(replace(
    'foo', 'yes', 'foo bar baz'
  )).toEqual('yes bar baz')
})

test('1', () => {
  expect(replace(/\s/g)('|')('foo bar baz')).toEqual('foo|bar|baz')
})

test('2', () => {
  expect(replace(/\s/g)('|', 'foo bar baz')).toEqual('foo|bar|baz')
})

test('3', () => {
  expect(replace(/\s/g, '|')('foo bar baz')).toEqual('foo|bar|baz')
})

```

</details>

<details>

<summary>
R.replace source
</summary>

```javascript
export function replace(
  pattern, replacer, str
){
  if (replacer === undefined){
    return (_replacer, _str) => replace(
      pattern, _replacer, _str
    )
  } else if (str === undefined){
    return _str => replace(
      pattern, replacer, _str
    )
  }

  return str.replace(pattern, replacer)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.replace('foo'%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0AR.replace(%2Ffoo%2F%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0AR.replace(%2Ffoo%2Fg%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20bar'">Try in REPL</a>

---
#### reverse

> reverse(str: T[]): T[]

```javascript
const arr = [1, 2]

const result = R.reverse(arr)
// => [2, 1]
```

<details>

<summary>
R.reverse tests
</summary>

```javascript
import { reverse } from './reverse'

test('happy', () => {
  expect(reverse([ 1, 2, 3 ])).toEqual([ 3, 2, 1 ])
})

test('with string', () => {
  expect(reverse('baz')).toEqual('zab')
})

test('it doesn\'t mutate', () => {
  const arr = [ 1, 2, 3 ]

  expect(reverse(arr)).toEqual([ 3, 2, 1 ])

  expect(arr).toEqual([ 1, 2, 3 ])
})

```

</details>

<details>

<summary>
R.reverse source
</summary>

```javascript
export function reverse(input){
  if (typeof input === 'string'){
    return input.split('').reverse()
      .join('')
  }

  const clone = input.slice()

  return clone.reverse()
}

```

</details>

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B1%2C%202%5D%0A%0Aconst%20result%20%3D%20R.reverse(arr)%0A%2F%2F%20%3D%3E%20%5B2%2C%201%5D">Try in REPL</a>

---
#### set

> set(lens: Lens, x: any, target: Array|Object): Array|Object

Returns a copied `Object` or `Array` with the modified value resulting from the input value replacing that of the lenses focus.

```
const xLens = R.lensProp('x')

R.set(xLens, 4, {x: 1, y: 2}) //=> {x: 4, y: 2}
R.set(xLens, 8, {x: 1, y: 2}) //=> {x: 8, y: 2}
```

---
#### slice

> slice(list: T[], from: Number, to: Number)

Returns the elements of the given list or string (or object with a `slice`
method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
Dispatches to the `slice` method of the third argument, if present.

```
R.slice(1, 3, ['a', 'b', 'c', 'd'])
//=> ['b', 'c']
```

---
#### sort

> sort(sortFn: Function, arr: T[]): T[]

It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return a number type.

```javascript
const sortFn = (a, b) => a - b

const result = R.sort(sortFn, [3, 1, 2])
// => [1, 2, 3]
```

<details>

<summary>
R.sort tests
</summary>

```javascript
import { sort } from './sort'

const fn = (a, b) => a > b ? 1 : -1

test('sort', () => {
  expect(sort((a, b) => a - b)([ 2, 3, 1 ])).toEqual([ 1, 2, 3 ])
})

test('it doesn\'t mutate', () => {
  const list = [ 'foo', 'bar', 'baz' ]

  expect(sort(fn, list)).toEqual([
    'bar',
    'baz',
    'foo',
  ])

  expect(list[ 0 ]).toBe('foo')
  expect(list[ 1 ]).toBe('bar')
  expect(list[ 2 ]).toBe('baz')
})

```

</details>

<details>

<summary>
R.sort source
</summary>

```javascript
export function sort(fn, list){
  if (arguments.length === 1) return _list => sort(fn, _list)

  const arrClone = list.slice()

  return arrClone.sort(fn)
}

```

</details>

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20(a%2C%20b)%20%3D%3E%20a%20-%20b%0A%0Aconst%20result%20%3D%20R.sort(sortFn%2C%20%5B3%2C%201%2C%202%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%5D">Try in REPL</a>

---
#### sortBy

> sortBy(sortFn: Function, arr: T[]): T[]

It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return value for comparison.

```javascript
const sortFn = obj => obj.foo

const result = R.sortBy(sortFn, [
  {foo: 1},
  {foo: 0}
])

const expectedResult = [ {foo: 0}, {foo: 1} ]
console.log(R.equals(result, expectedResult))
// => true
```

<details>

<summary>
R.sortBy tests
</summary>

```javascript
import { compose, prop, toLower } from '../rambda'
import { sortBy } from './sortBy'

test('sortBy', () => {
  const sortByNameCaseInsensitive = sortBy(compose(toLower, prop('name')))
  const alice = {
    name : 'ALICE',
    age  : 101,
  }
  const bob = {
    name : 'Bob',
    age  : -10,
  }
  const clara = {
    name : 'clara',
    age  : 314.159,
  }
  const people = [ clara, bob, alice ]

  expect(sortByNameCaseInsensitive(people)).toEqual([ alice, bob, clara ])

  expect(sortBy(val => val.a, [ { a : 2 }, { a : 1 }, { a : 0 } ])).toEqual([ { a : 0 }, { a : 1 }, { a : 2 } ])

  expect(sortBy(val => val.a, [ { a : 1 }, { a : 1 }, { a : 1 } ])).toEqual([ { a : 1 }, { a : 1 }, { a : 1 } ])

  expect(sortBy(val => val.a, [ { a : 3 }, { a : 2 }, { a : 1 } ])).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])

  expect(sortBy(val => val.a, [ { a : 1 }, { a : 2 }, { a : 3 } ])).toEqual([ { a : 1 }, { a : 2 }, { a : 3 } ])
})

```

</details>

<details>

<summary>
R.sortBy source
</summary>

```javascript
export function sortBy(fn, list){
  if (arguments.length === 1) return _list => sortBy(fn, _list)

  const arrClone = list.slice()

  return arrClone.sort((a, b) => {
    const fnA = fn(a)
    const fnB = fn(b)

    if (fnA === fnB) return 0

    return fnA < fnB ? -1 : 1
  })
}

```

</details>

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20obj%20%3D%3E%20obj.foo%0A%0Aconst%20result%20%3D%20R.sortBy(sortFn%2C%20%5B%0A%20%20%7Bfoo%3A%201%7D%2C%0A%20%20%7Bfoo%3A%200%7D%0A%5D)%0A%0Aconst%20expectedResult%20%3D%20%5B%20%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%20%5D%0Aconsole.log(R.equals(result%2C%20expectedResult))%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### split

> split(separator: string, str: string): string[]

```javascript
R.split('-', 'a-b-c') // => ['a', 'b', 'c']
```

<details>

<summary>
R.split tests
</summary>

```javascript
import { split } from './split'

test('split', () => {
  expect(split('|')('foo|bar|baz')).toEqual([ 'foo', 'bar', 'baz' ])

  expect(split('.', 'a.b.c.xyz.d')).toEqual([
    'a',
    'b',
    'c',
    'xyz',
    'd',
  ])
})

```

</details>

<details>

<summary>
R.split source
</summary>

```javascript
export function split(separator, str){
  if (arguments.length === 1) return _str => split(separator, _str)

  return str.split(separator)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.split('-'%2C%20'a-b-c')%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%2C%20'c'%5D">Try in REPL</a>

---
#### splitEvery

> splitEvery(sliceLength: number, arrOrString: T[]|string): T[T[]]|string[]

It splits `arrOrStr` into slices of `sliceLength`.

```javascript
R.splitEvery(2, [1, 2, 3]) // => [[1, 2], [3]]
R.splitEvery(3, 'foobar') // => ['foo', 'bar']
```

<details>

<summary>
R.splitEvery tests
</summary>

```javascript
import { splitEvery } from './splitEvery'

test('happy', () => {
  expect(splitEvery(3, [ 1, 2, 3, 4, 5, 6, 7 ])).toEqual([
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7 ],
  ])

  expect(splitEvery(3)('foobarbaz')).toEqual([ 'foo', 'bar', 'baz' ])
})

test('with bad input', () => {
  expect(() => expect(splitEvery(0)('foo')).toEqual([ 'f', 'o', 'o' ])).toThrow('First argument to splitEvery must be a positive integer')

})

```

</details>

<details>

<summary>
R.splitEvery source
</summary>

```javascript
export function splitEvery(n, list){
  if (arguments.length === 1) return _list => splitEvery(n, _list)

  if (n < 1) throw new Error('First argument to splitEvery must be a positive integer')
  const willReturn = []
  let counter = 0

  while (counter < list.length){
    willReturn.push(list.slice(counter, counter += n))
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.splitEvery(2%2C%20%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20%5B3%5D%5D%0AR.splitEvery(3%2C%20'foobar')%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D">Try in REPL</a>

---
#### startsWith

> startsWith(x: string, str: string): boolean

```javascript
R.startsWith(
  'foo',
  'foo-bar'
) // => true

R.startsWith(
  'bar',
  'foo-bar'
) // => false
```

<details>

<summary>
R.startsWith tests
</summary>

```javascript
import { startsWith } from './startsWith'

test('true', () => {
  const result = startsWith('foo', 'foo-bar')

  expect(result).toBeTrue()
})

test('false', () => {
  const result = startsWith('baz')('foo-bar')

  expect(result).toBeFalse()
})

```

</details>

<details>

<summary>
R.startsWith source
</summary>

```javascript
export function startsWith(prefix, list){
  if (arguments.length === 1) return _list => startsWith(prefix, _list)

  return list.startsWith(prefix)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.startsWith(%0A%20%20'foo'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20true%0A%0AR.startsWith(%0A%20%20'bar'%2C%0A%20%20'foo-bar'%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### subtract

> subtract(a: number, b: number): number

```javascript
R.subtract(3, 1) // => 2
```

<details>

<summary>
R.subtract tests
</summary>

```javascript
import { subtract } from './subtract'

test('happy', () => {
  expect(subtract(2, 1)).toEqual(1)
  expect(subtract(2)(1)).toEqual(1)
})

```

</details>

<details>

<summary>
R.subtract source
</summary>

```javascript
export function subtract(a, b){
  if (arguments.length === 1) return _b => subtract(a, _b)

  return a - b
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.subtract(3%2C%201)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### sum

> sum(listOfNumbers: number[]): number

```
R.sum([1,2,3,4,5]) // => 15
```

---
#### T

`R.T() // => true`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/T.js)

---
#### tail

> tail(arrOrStr: T[]|string): T[]|string

- It returns all but the first element of `arrOrStr`

```javascript
R.tail([1, 2, 3])  // => [2, 3]
R.tail('foo')  // => 'oo'
```

<details>

<summary>
R.tail tests
</summary>

```javascript
import { tail } from './tail'

test('tail', () => {
  expect(tail([ 1, 2, 3 ])).toEqual([ 2, 3 ])
  expect(tail([ 1, 2 ])).toEqual([ 2 ])
  expect(tail([ 1 ])).toEqual([])
  expect(tail([])).toEqual([])

  expect(tail('abc')).toEqual('bc')
  expect(tail('ab')).toEqual('b')
  expect(tail('a')).toEqual('')
  expect(tail('')).toEqual('')
})

```

</details>

<details>

<summary>
R.tail source
</summary>

```javascript
import { drop } from './drop'

export function tail(list){
  return drop(1, list)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.tail(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B2%2C%203%5D%0AR.tail('foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### take

> take(num: number, arrOrStr: T[]|string): T[]|string

It returns the first `num` elements of `arrOrStr`.

```javascript
R.take(1, ['foo', 'bar']) // => ['foo']
R.take(2, 'foo') // => 'fo'
```

<details>

<summary>
R.take tests
</summary>

```javascript
import { take } from './take'

test('happy', () => {
  const arr = [ 'foo', 'bar', 'baz' ]

  expect(take(1, arr)).toEqual([ 'foo' ])

  expect(arr).toEqual([ 'foo', 'bar', 'baz' ])

  expect(take(2)([ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar' ])
  expect(take(3, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
  expect(take(4, [ 'foo', 'bar', 'baz' ])).toEqual([ 'foo', 'bar', 'baz' ])
  expect(take(3)('rambda')).toEqual('ram')
})

test('with negative index', () => {
  expect(take(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(take(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

test('with zero index', () => {
  expect(take(0, [ 1, 2, 3 ])).toEqual([])
})

```

</details>

<details>

<summary>
R.take source
</summary>

```javascript
import baseSlice from './internal/baseSlice'

export function take(n, list){
  if (arguments.length === 1) return _list => take(n, _list)
  if (n < 0) return list.slice()
  if (typeof list === 'string') return list.slice(0, n)

  return baseSlice(
    list, 0, n
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.take(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0AR.take(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### takeLast

> takeLast(num: number, arrOrStr: T[]|string): T[]|string

It returns the last `num` elements of `arrOrStr`.

```javascript
R.takeLast(1, ['foo', 'bar']) // => ['bar']
R.takeLast(2, 'foo') // => 'oo'
```

<details>

<summary>
R.takeLast tests
</summary>

```javascript
import { takeLast } from './takeLast'

test('with arrays', () => {
  expect(takeLast(1, [ 'foo', 'bar', 'baz' ])).toEqual([ 'baz' ])

  expect(takeLast(2)([ 'foo', 'bar', 'baz' ])).toEqual([
    'bar',
    'baz',
  ])

  expect(takeLast(3, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(4, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])

  expect(takeLast(10, [ 'foo', 'bar', 'baz' ])).toEqual([
    'foo',
    'bar',
    'baz',
  ])
})

test('with strings', () => {
  expect(takeLast(3, 'rambda')).toEqual('bda')

  expect(takeLast(7, 'rambda')).toEqual('rambda')
})

test('with negative index', () => {
  expect(takeLast(-1, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
  expect(takeLast(-Infinity, [ 1, 2, 3 ])).toEqual([ 1, 2, 3 ])
})

```

</details>

<details>

<summary>
R.takeLast source
</summary>

```javascript
import baseSlice from './internal/baseSlice'

export function takeLast(n, list){
  if (arguments.length === 1) return _list => takeLast(n, _list)

  const len = list.length
  if (n < 0) return list.slice()
  let numValue = n > len ? len : n

  if (typeof list === 'string') return list.slice(len - numValue)

  numValue = len - numValue

  return baseSlice(
    list, numValue, len
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.takeLast(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%5D%0AR.takeLast(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### tap

> tap(fn: Function, input: T): T

It applies function to input and pass the input back. Use case is debuging in the middle of `R.compose`.

```javascript
let a = 1
const sayX = x => (a = x)

const result = R.tap(sayX, 100)
// both `a` and `result` are `100`
```

<details>

<summary>
R.tap tests
</summary>

```javascript
import { tap } from './tap'

test('tap', () => {
  let a = 1
  const sayX = x => a = x

  expect(tap(sayX, 100)).toEqual(100)
  expect(tap(sayX)(100)).toEqual(100)
  expect(a).toEqual(100)
})

```

</details>

<details>

<summary>
R.tap source
</summary>

```javascript
export function tap(fn, x){
  if (arguments.length === 1) return _x => tap(fn, _x)

  fn(x)

  return x
}

```

</details>

<a href="https://rambda.now.sh?let%20a%20%3D%201%0Aconst%20sayX%20%3D%20x%20%3D%3E%20(a%20%3D%20x)%0A%0Aconst%20result%20%3D%20R.tap(sayX%2C%20100)%0A%2F%2F%20both%20%60a%60%20and%20%60result%60%20are%20%60100%60">Try in REPL</a>

---
#### test

> test(regExpression: Regex, str: string): boolean

Determines whether `str` matches `regExpression`

```
R.test(/^f/, 'foo')
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/test.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### times

> times(fn: Function, n: number): T[]

It returns the result of applying function `fn` over members of range array.
The range array includes numbers between `0` and `n`(exclusive).

```javascript
R.times(R.identity, 5)
//=> [0, 1, 2, 3, 4]
```

<details>

<summary>
R.times tests
</summary>

```javascript
import assert from 'assert'

import { identity } from './identity'
import { times } from './times'

test('happy', () => {
  const result = times(identity, 5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

test('with bad input', () => {
  assert.throws(() => { times(3)('cheers!') }, RangeError)
  assert.throws(() => { times(identity, -1) }, RangeError)
})

test('curry', () => {
  const result = times(identity)(5)

  expect(result).toEqual([ 0, 1, 2, 3, 4 ])
})

```

</details>

<details>

<summary>
R.times source
</summary>

```javascript
import { map } from './map'
import { range } from './range'

export function times(fn, n){
  if (arguments.length === 1) return _n => times(fn, _n)
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be an integer')

  return map(fn, range(0, n))
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.times(R.identity%2C%205)%0A%2F%2F%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try in REPL</a>

---
#### toLower

> toLower(str: string): string

```javascript
R.toLower('FOO') // => 'foo'
```

<details>

<summary>
R.toLower tests
</summary>

```javascript
import { toLower } from './toLower'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
})

```

</details>

<details>

<summary>
R.toLower source
</summary>

```javascript
export function toLower(str){
  return str.toLowerCase()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### toPairs

> toPairs(obj: object): any[]

It transforms an object to a list.

```javascript
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// expected === result
```

<details>

<summary>
R.toPairs tests
</summary>

```javascript
import { toPairs } from './toPairs'

const obj = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

test('happy', () => {
  expect(toPairs(obj)).toEqual(expected)
})

```

</details>

<details>

<summary>
R.toPairs source
</summary>

```javascript
export function toPairs(obj){
  return Object.entries(obj)
}

```

</details>

<a href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

---
#### toString

> toString(x: any): string

```javascript
R.toString([1, 2]) // => '1,2'
```

<details>

<summary>
R.toString tests
</summary>

```javascript
import { toString } from './toString'

test('happy', () => {
  expect(toString([ 1, 2, 3 ])).toEqual('1,2,3')
})

```

</details>

<details>

<summary>
R.toString source
</summary>

```javascript
export function toString(val){
  return val.toString()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20'1%2C2'">Try in REPL</a>

---
#### toUpper

> toUpper(str: string): string

```javascript
R.toUpper('foo') // => 'FOO'
```

<details>

<summary>
R.toUpper tests
</summary>

```javascript
import { toUpper } from './toUpper'

test('toUpper', () => {
  expect(toUpper('foo|bar|baz')).toEqual('FOO|BAR|BAZ')
})

```

</details>

<details>

<summary>
R.toUpper source
</summary>

```javascript
export function toUpper(str){
  return str.toUpperCase()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%20%2F%2F%20%3D%3E%20'FOO'">Try in REPL</a>

---
#### transpose

> transpose(input: Array): Array

```
const input = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(input)
// result === expected
```

---
#### trim

> trim(str: string): string

```javascript
R.trim('  foo  ') // => 'foo'
```

<details>

<summary>
R.trim tests
</summary>

```javascript
import { trim } from './trim'

test('trim', () => {
  expect(trim(' foo ')).toEqual('foo')
})

```

</details>

<details>

<summary>
R.trim source
</summary>

```javascript
export function trim(str){
  return str.trim()
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### type

> type(a: any): string

```javascript
R.type(() => {}) // => 'Function'
R.type(async () => {}) // => 'Async'
R.type([]) // => 'Array'
R.type({}) // => 'Object'
R.type('foo') // => 'String'
R.type(1) // => 'Number'
R.type(true) // => 'Boolean'
R.type(null) // => 'Null'
R.type(/[A-z]/) // => 'RegExp'

const delay = ms => new Promise(resolve => {
  setTimeout(function () {
    resolve()
  }, ms)
})
R.type(delay) // => 'Promise'
```

<details>

<summary>
R.type tests
</summary>

```javascript
import { type as ramdaType } from 'ramda'

import { type } from './type'

test('with simple promise', () => {
  expect(type(Promise.resolve(1))).toBe('Promise')
})

test('with new Boolean', () => {
  expect(type(new Boolean(true))).toBe('Boolean')
})

test('with new String', () => {
  expect(type(new String('I am a String object'))).toEqual('String')
})

test('with new Number', () => {
  expect(type(new Number(1))).toBe('Number')
})

test('with new promise', () => {
  const delay = ms =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve(ms + 110)
      }, ms)
    })

  expect(type(delay(10))).toEqual('Promise')
})

test('async function', () => {
  expect(type(async () => {})).toEqual('Async')
})

test('async arrow', () => {
  const asyncArrow = async () => {}
  expect(type(asyncArrow)).toBe('Async')
})

test('function', () => {
  const fn1 = () => {}
  const fn2 = function(){}

  function fn3(){}

  [ () => {}, fn1, fn2, fn3 ].map(val => {
    expect(type(val)).toEqual('Function')
  })
})

test('object', () => {
  expect(type({})).toEqual('Object')
})

test('number', () => {
  expect(type(1)).toEqual('Number')
})

test('boolean', () => {
  expect(type(false)).toEqual('Boolean')
})

test('string', () => {
  expect(type('foo')).toEqual('String')
})

test('null', () => {
  expect(type(null)).toEqual('Null')
})

test('array', () => {
  expect(type([])).toEqual('Array')
  expect(type([ 1, 2, 3 ])).toEqual('Array')
})

test('regex', () => {
  expect(type(/\s/g)).toEqual('RegExp')
})

test('undefined', () => {
  expect(type(undefined)).toEqual('Undefined')
})

test('not a number', () => {
  expect(type(Number('s'))).toBe('NaN')
})

test('function inside object 1', () => {
  const obj = {
    f(){
      return 4
    },
  }

  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})

test('function inside object 2', () => {
  const name = 'f'
  const obj = {
    [ name ](){
      return 4
    },
  }
  expect(type(obj.f)).toBe('Function')
  expect(ramdaType(obj.f)).toBe('Function')
})

```

</details>

<details>

<summary>
R.type source
</summary>

```javascript
export function type(input){
  const typeOf = typeof input

  if (input === null){
    return 'Null'
  } else if (input === undefined){
    return 'Undefined'
  } else if (typeOf === 'boolean'){
    return 'Boolean'
  } else if (typeOf === 'number'){
    return Number.isNaN(input) ? 'NaN' : 'Number'
  } else if (typeOf === 'string'){
    return 'String'
  } else if (Array.isArray(input)){
    return 'Array'
  } else if (input instanceof RegExp){
    return 'RegExp'
  }

  const asStr = input && input.toString ? input.toString() : ''

  if ([ 'true', 'false' ].includes(asStr)) return 'Boolean'
  if (!Number.isNaN(Number(asStr))) return 'Number'
  if (asStr.startsWith('async')) return 'Async'
  if (asStr === '[object Promise]') return 'Promise'
  if (typeOf === 'function') return 'Function'
  if (input instanceof String) return 'String'

  return 'Object'
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.type(()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Function'%0AR.type(async%20()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Async'%0AR.type(%5B%5D)%20%2F%2F%20%3D%3E%20'Array'%0AR.type(%7B%7D)%20%2F%2F%20%3D%3E%20'Object'%0AR.type('foo')%20%2F%2F%20%3D%3E%20'String'%0AR.type(1)%20%2F%2F%20%3D%3E%20'Number'%0AR.type(true)%20%2F%2F%20%3D%3E%20'Boolean'%0AR.type(null)%20%2F%2F%20%3D%3E%20'Null'%0AR.type(%2F%5BA-z%5D%2F)%20%2F%2F%20%3D%3E%20'RegExp'%0A%0Aconst%20delay%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20resolve()%0A%20%20%7D%2C%20ms)%0A%7D)%0AR.type(delay)%20%2F%2F%20%3D%3E%20'Promise'">Try in REPL</a>

---
#### uniq

> uniq(arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr`.

```javascript
R.uniq([1, 1, 2, 1])
// => [1, 2]
```

<details>

<summary>
R.uniq tests
</summary>

```javascript
import { uniq } from './uniq'

test('uniq', () => {
  expect(uniq([ 1, 2, 3, 3, 3, 1, 2, 0 ])).toEqual([ 1, 2, 3, 0 ])
  expect(uniq([ 1, 1, 2, 1 ])).toEqual([ 1, 2 ])
  expect([ 1, '1' ]).toEqual([ 1, '1' ])
  expect(uniq([ [ 42 ], [ 42 ] ])).toEqual([ [ 42 ] ])
})

```

</details>

<details>

<summary>
R.uniq source
</summary>

```javascript
import { includes } from './includes'

export function uniq(list){
  let index = -1
  const willReturn = []

  while (++index < list.length){
    const value = list[ index ]

    if (!includes(value, willReturn)){
      willReturn.push(value)
    }
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.uniq(%5B1%2C%201%2C%202%2C%201%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### uniqWith

> uniqWith(fn: Function, arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr` according to boolean returning function `fn`.

```javascript
const arr = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
  {id: 3, title:'foo'},
  {id: 4, title:'bar'},
]

const expectedResult = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
]

const fn = (x,y) => x.title === y.title

const result = R.uniqWith(fn, arr)

console.log(R.equals(result, expectedResult)) // => true
```

<details>

<summary>
R.uniqWith tests
</summary>

```javascript
import { uniqWith } from './uniqWith'

test('happy', () => {
  const input = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
    {
      id    : 3,
      title : 'foo',
    },
    {
      id    : 4,
      title : 'bar',
    },
  ]

  const expectedResult = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
  ]

  const fn = (x, y) => x.title === y.title

  const result = uniqWith(fn, input)
  const curriedResult = uniqWith(fn)(input)

  expect(result).toEqual(expectedResult)

  expect(curriedResult).toEqual(expectedResult)
})

test('uniqWith', () => {
  const input = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
    {
      id    : 3,
      title : 'foo',
    },
    {
      id    : 4,
      title : 'bar',
    },
  ]

  const expectedResult = [
    {
      id    : 0,
      title : 'foo',
    },
    {
      id    : 1,
      title : 'bar',
    },
    {
      id    : 2,
      title : 'baz',
    },
  ]

  const fn = (x, y) => x.title === y.title

  const result = uniqWith(fn, input)
  //const result = uniqWith(Ramda.eqBy(Ramda.prop('title')), input)

  expect(result).toEqual(expectedResult)
})

```

</details>

<details>

<summary>
R.uniqWith source
</summary>

```javascript
import { any } from './any'

export function uniqWith(fn, list){
  if (arguments.length === 1) return _list => uniqWith(fn, _list)

  let index = -1
  const len = list.length
  const willReturn = []

  while (++index < len){
    const value = list[ index ]
    const flag = any(willReturnInstance => fn(value, willReturnInstance),
      willReturn)

    if (!flag){
      willReturn.push(value)
    }
  }

  return willReturn
}

```

</details>

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expectedResult%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20fn%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(fn%2C%20arr)%0A%0Aconsole.log(R.equals(result%2C%20expectedResult))%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### update

> update(i: number, replaceValue: T, arr: T[]): T[]

It returns a new copy of the `arr` with the element at `i` index
replaced with `replaceValue`.

```javascript
R.update(0, 'foo', ['bar', 'baz'])
// => ['foo', baz]
```

<details>

<summary>
R.update tests
</summary>

```javascript
import { update } from './update'

test('update', () => {
  expect(update(1)(0)([ 1, 2, 3 ])).toEqual([ 1, 0, 3 ])
  expect(update(
    1, 11, [ 0, 1, 2 ]
  )).toEqual([ 0, 11, 2 ])
})

```

</details>

<details>

<summary>
R.update source
</summary>

```javascript
export function update(
  idx, val, list
){
  if (val === undefined){
    return (_val, _list) => update(
      idx, _val, _list
    )
  } else if (list === undefined){
    return _list => update(
      idx, val, _list
    )
  }

  const arrClone = list.slice()

  return arrClone.fill(
    val, idx, idx + 1
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.update(0%2C%20'foo'%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20baz%5D">Try in REPL</a>

---
#### values

> values(obj: Object): Array

It returns array with of all values in `obj`.

```javascript
R.values({a: 1, b: 2})
// => [1, 2]
```

<details>

<summary>
R.values tests
</summary>

```javascript
import { values } from './values'

test('happy', () => {
  expect(values({
    a : 1,
    b : 2,
    c : 3,
  })).toEqual([ 1, 2, 3 ])
})

test('with bad input', () => {
  expect(values(null)).toEqual([])
  expect(values(undefined)).toEqual([])
  expect(values(55)).toEqual([])
  expect(values('foo')).toEqual([])
  expect(values(true)).toEqual([])
  expect(values(false)).toEqual([])
  expect(values(NaN)).toEqual([])
  expect(values(Infinity)).toEqual([])
  expect(values([])).toEqual([])
})

```

</details>

<details>

<summary>
R.values source
</summary>

```javascript
import { type } from './type.js'

export function values(obj){
  if (type(obj) !== 'Object') return []

  return Object.values(obj)
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.values(%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### view

> view(lens: Lens, target: Array|Object): any

Returns the value at the lenses focus on the target object.

```
const xLens = R.lensProp('x')

R.view(xLens, {x: 1, y: 2}) //=> 1
R.view(xLens, {x: 4, y: 2}) //=> 4
```


---
#### without

> without(a: T[], b: T[]): T[]

It will return a new array based on `b` array.

This array contains all members of `b` array, that doesn't exist in `a` array.

Method `R.equals` is used to determine the existance of `b` members in `a` array.

```javascript
R.without([1, 2], [1, 2, 3, 4])
// => [3, 4]
```

<details>

<summary>
R.without tests
</summary>

```javascript
import { without } from './without'

test('should return a new list without values in the first argument ', () => {
  const itemsToOmit = [ 'A', 'B', 'C' ]
  const collection = [ 'A', 'B', 'C', 'D', 'E', 'F' ]

  expect(without(itemsToOmit, collection)).toEqual([ 'D', 'E', 'F' ])
  expect(without(itemsToOmit)(collection)).toEqual([ 'D', 'E', 'F' ])
})

test('ramda test', () => {
  expect(without([ 1, 2 ])([ 1, 2, 1, 3, 4 ])).toEqual([ 3, 4 ])
})

```

</details>

<details>

<summary>
R.without source
</summary>

```javascript
import { includes } from './includes'
import { reduce } from './reduce'

export function without(left, right){
  if (right === undefined){
    return _right => without(left, _right)
  }

  return reduce(
    (accum, item) =>
      includes(item, left) ? accum : accum.concat(item),
    [],
    right
  )
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.without(%5B1%2C%202%5D%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try in REPL</a>

---
#### xor

> xor(a: boolean, b: boolean): boolean

Logical xor function

```
R.xor(false, true)
// => true

R.xor(true, true)
// => false
```


---
#### zip

> zip(a: K[], b: V[]): Array

It will return a new array containing tuples of equally positions items from both lists. The returned list will be truncated to match the length of the shortest supplied list.

```javascript
R.zip([1, 2], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([1, 2, 3, 4], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

<details>

<summary>
R.zip tests
</summary>

```javascript
import { zip } from './zip'

const array1 = [ 1, 2, 3 ]
const array2 = [ 'A', 'B', 'C' ]

test('should return an array', () => {
  const actual = zip(array1)(array2)
  expect(actual).toBeInstanceOf(Array)
})

test('should return and array or tuples', () => {
  const expected = [ [ 1, 'A' ], [ 2, 'B' ], [ 3, 'C' ] ]
  const actual = zip(array1, array2)
  expect(actual).toEqual(expected)
})

test('should truncate result to length of shorted input list', () => {
  const expectedA = [ [ 1, 'A' ], [ 2, 'B' ] ]
  const actualA = zip([ 1, 2 ], array2)
  expect(actualA).toEqual(expectedA)

  const expectedB = [ [ 1, 'A' ], [ 2, 'B' ] ]
  const actualB = zip(array1, [ 'A', 'B' ])
  expect(actualB).toEqual(expectedB)
})

```

</details>

<details>

<summary>
R.zip source
</summary>

```javascript
export function zip(left, right){
  if (arguments.length === 1) return _right => zip(left, _right)

  const result = []
  const length = Math.min(left.length, right.length)

  for (let i = 0; i < length; i++){
    result[ i ] = [ left[ i ], right[ i ] ]
  }

  return result
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.zip(%5B1%2C%202%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zip(%5B1%2C%202%2C%203%2C%204%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try in REPL</a>

---
#### zipObj

> zipObj(a: K[], b: V[]): Object

It will return a new object with keys of `a` array and values of `b` array.

```javascript
R.zipObj(['a', 'b', 'c'], [1, 2, 3])
//=> {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(['a', 'b', 'c'], [1, 2])
//=> {a: 1, b: 2}
```

<details>

<summary>
R.zipObj tests
</summary>

```javascript
import { equals } from './equals'
import { zipObj } from './zipObj'

test('zipObj', () => {
  expect(zipObj([ 'a', 'b', 'c' ], [ 1, 2, 3 ])).toEqual({
    a : 1,
    b : 2,
    c : 3,
  })
})

test('0', () => {
  expect(zipObj([ 'a', 'b' ])([ 1, 2, 3 ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('1', () => {
  expect(zipObj([ 'a', 'b', 'c' ])([ 1, 2 ])).toEqual({
    a : 1,
    b : 2,
  })
})

test('ignore extra keys', () => {
  const result = zipObj([ 'a', 'b', 'c', 'd', 'e', 'f' ], [ 1, 2, 3 ])
  const expected = {
    a : 1,
    b : 2,
    c : 3,
  }

  expect(equals(result, expected)).toBeTrue()
})

```

</details>

<details>

<summary>
R.zipObj source
</summary>

```javascript
import { take } from './take'

export function zipObj(keys, values){
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder)

  return take(values.length, keys).reduce((
    prev, xInstance, i
  ) => {
    prev[ xInstance ] = values[ i ]

    return prev
  }, {})
}

```

</details>

<a href="https://rambda.now.sh?const%20result%20%3D%20R.zipObj(%5B'a'%2C%20'b'%2C%20'c'%5D%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0AR.zipObj(%5B'a'%2C%20'b'%2C%20'c'%5D%2C%20%5B1%2C%202%5D)%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%7D">Try in REPL</a>

---
#### ---

## Use with ES5

```
import omit from 'rambda/lib/omit'
```

> Latest version that has this feature is `2.3.1`

## Changelog

- 5.0.0

Move `R.partialCurry` to Rambdax(reason for major bump)

Use new type of export in Typescript definitions

- 4.7.0 

Approve [PR #381](https://github.com/selfrefactor/rambda/pull/381) - add `R.applySpec`

- 4.6.0 

Approve [PR #375](https://github.com/selfrefactor/rambda/pull/375) - add lenses(Thank you [@synthet1c](https://github.com/synthet1c))

Add `R.lens`

Add `R.lensIndex`

Add `R.lensPath`

Add `R.lensProp`

Add `R.over`

Add `R.set`

Add `R.view`

> Sync with Ramda 0.27

Add `R.paths`

Add `R.xor`

> Close [Issue #373](https://github.com/selfrefactor/rambda/issues/373)

Add `R.cond`

- 4.5.0 Add `R.clamp`

- 4.4.2 Improve `R.propOr` typings

- 4.4.1 Make `R.reject` has the same typing as `R.filter`

- 4.4.0 Several changes:

Close [Issue #317](https://github.com/selfrefactor/rambda/issues/317) - add `R.transpose`

Close [Issue #325](https://github.com/selfrefactor/rambda/issues/325) - `R.filter` should return equal values for bad inputs `null` and `undefined`

Approve suggestion for `R.indexBy` to accept string not only function as first argument.

Edit of `R.path` typings

- 4.2.0 Approve [PR #314](https://github.com/selfrefactor/rambda/pull/314) - add `R.and`

- 4.1.1 Add missing typings for `R.slice`

- 4.1.0 Add `R.findLast` and `R.findLastIndex`

- 4.0.2 Fix `R.isEmpty` wrong behaviour compared to the Ramda method

- 4.0.1 Approve [PR #289](https://github.com/selfrefactor/rambda/pull/289) - remove console.log in `R.values` method

- 4.0.0 Multiple breaking changes as Rambda methods are changed in order to increase the similarity between with Ramda

Add to `Differences`:

```text
R.type can return 'NaN'

R.compose doesn't pass `this` context

R.clone doesn't work with number, booleans and strings as input
```

All breaking changes:

-- R.add works only with numbers

-- Fix R.adjust which had wrong order of arguments

-- R.adjust works when index is out of bounds

-- R.complement support function with multiple arguments

-- R.compose/pipe throws when called with no argument

-- R.clone works with `Date` value as input

-- R.drop/dropLast/take/takeLast always return new copy of the list/string

-- R.take/takeLast return original list/string with negative index

-- R.equals handles `NaN` and `RegExp` types

-- R.type/R.equals supports `new Boolean/new Number/new Date/new String` expressions

-- R.has works with non-object

-- R.ifElse pass all arguments

-- R.length works with bad input

-- R.propEq work with bad input for object argument

-- R.range work with bad inputs

-- R.times work with bad inputs

-- R.reverse works with strings

-- R.splitEvery throws on non-positive integer index

-- R.test throws just like Ramda when first argument is not regex

-- R.values works with bad inputs

-- R.zipObj ignores extra keys

- 3.3.0

This is pre `4.0.0` release and it contains all of the above changes

Close [issue #287](https://github.com/selfrefactor/rambda/issues/287) - `ts-toolbelt` directory was changed but not reflected in `files` property in `package.json`

- 3.2.5

Close [issue #273](https://github.com/selfrefactor/rambda/issues/273) - ts-toolbelt needs other type of export when `isolatedModules` TypeScript property

Close [issue #245](https://github.com/selfrefactor/rambda/issues/245) - complete typings tests for methods that have more specific Typescript definitions

- 3.2.1 Fast fix for [issue #273](https://github.com/selfrefactor/rambda/issues/273) - messed up typings

- 3.2.0 There are several changes:

Close [issue #263](https://github.com/selfrefactor/rambda/issues/263) - broken curry typing solved by `ts-toolbelt` local dependency.

Add `R.partialCurry` typings.

Approve [PR #266](https://github.com/selfrefactor/rambda/pull/266) that adds `R.slice` method.

- 3.1.0 This might be breaking change for Typescript users, as very different definitions are introduced. With the previous state of the definitions, it was not possible to pass `dtslint` typings tests.

- `R.either` and `R.both` supports multiple arguments as they should.

- Several methods added by  [@squidfunk](https://github.com/squidfunk) - `R.assocPath`, `R.symmetricDifference`, `R.intersperse`, `R.intersection` and `R.difference`

- 3.0.1 Close [issue #234](https://github.com/selfrefactor/rambda/issues/234) - wrong curry typing

- 3.0.0 Deprecate `R.contains`, while `R.includes` is now following Ramda API(it uses `R.equals` for comparision)

- 2.14.5 `R.without` needs currying

- 2.14.4 Close [issue #227](https://github.com/selfrefactor/rambda/issues/227) - add index as third argument of `R.reduce` typings

- 2.14.2 Use `R.curry` with `R.reduce` as manual curry there didn't work as expected.

- 2.14.1 Fix wrong typescript with `R.head` - [PR #228](https://github.com/selfrefactor/rambda/pull/228) pushed by [@tonivj5](https://github.com/tonivj5)

- 2.14.0 Add `R.groupWith` by @selfrefactor | Add `R.propOr`, `R.mathMod`, `R.mean`, `R.median`, `R.negate`, `R.product` by [@ku8ar](https://github.com/ku8ar)

- 2.13.0 Add `R.identical` - [PR #217](https://github.com/selfrefactor/rambda/pull/217) pushed by [@ku8ar](https://github.com/ku8ar)

- 2.12.0 Add `R.propIs` - [PR #213](https://github.com/selfrefactor/rambda/pull/213) and add `R.sum` - [issue #207](https://github.com/selfrefactor/rambda/issues/207)

- 2.11.2 Close Rambdax [issue #32](https://github.com/selfrefactor/rambdax/issues/32) - wrong `R.type` when function is input

- 2.11.1 Approve [PR #182](https://github.com/selfrefactor/rambda/pull/182) - Changed typings to allow object as input to `R.forEach` and `R.map`

- 2.11.0 Approve [PR #179](https://github.com/selfrefactor/rambda/pull/179) - `R.adjust` handles negative index; `R.all` doesn't need `R.filter`

- 2.10.2 Close [issue #175](https://github.com/selfrefactor/rambda/issues/175) - missing typescript file

- 2.10.0 Approve huge and important [PR #171](https://github.com/selfrefactor/rambda/pull/171) submitted by [@helmuthdu](https://github.com/helmuthdu) - Add comments to each method, improve Typescript support

- 2.9.0 `R.toPairs` and `R.fromPairs`

- 2.8.0 Approve [PR #165](https://github.com/selfrefactor/rambda/pull/165) `R.clone`

- 2.7.1 expose `src` | Discussed at [issue #147](https://github.com/selfrefactor/rambda/issues/147)

- 2.7.0 Approve [PR #161](https://github.com/selfrefactor/rambda/pull/161) `R.isEmpty`

- 2.6.0 `R.map`, `R.filter` and `R.forEach` pass original object to iterator as third argument | Discussed at [issue #147](https://github.com/selfrefactor/rambda/issues/147)

- 2.5.0 Close [issue #149](https://github.com/selfrefactor/rambda/issues/149) Add `R.partial` | `R.type` handles `NaN`

- 2.4.0 Major bump of `Rollup`; Stop building for ES5

- 2.3.1 Close [issue #90](https://github.com/selfrefactor/rambda/issues/90) | Add string type of path in `R.pathOr`

- 2.3.0 Close [issue #89](https://github.com/selfrefactor/rambda/issues/89) | Fix missing `Number` TS definition in `R.type`

- 2.2.0 `R.defaultTo` accepts indefinite number of input arguments. So the following is valid expression: `const x = defaultTo('foo',null, null, 'bar')`

- 2.1.0 Restore `R.zip` using [WatermelonDB](https://github.com/Nozbe/WatermelonDB/) implementation.

- 2.0.0 Major version caused by removing of `R.zip` and `R.addIndex`. [Issue #85](https://github.com/selfrefactor/rambda/issues/85) rightfully finds that the implementation of `R.addIndex` is not correct. This led to removing this method and also of `R.zip` as it had depended on it. The second change is that `R.map`, `R.filter` are passing array index as second argument when looping over arrays. The third change is that `R.includes` will return `false` if input is neigher `string` nor `array`. The previous behaviour was to throw an error. The last change is to increase the number of methods that are passing index as second argument to the predicate function.

- 1.2.6 Use `src` folder instead of `modules`
- 1.2.5 Fix `omit` typing
- 1.2.4 Add missing Typescript definitions - [PR#82](https://github.com/selfrefactor/rambda/pull/82)
- 1.2.2 Change curry method used across most of library methods
- 1.2.1 Add `R.assoc` | fix passing `undefined` to `R.map` and `R.merge` [issue #77](https://github.com/selfrefactor/rambda/issues/77)
- 1.2.0 Add `R.min`, `R.minBy`, `R.max`, `R.maxBy`, `R.nth` and `R.keys`
- 1.1.5 Close [issue #74](https://github.com/selfrefactor/rambda/issues/74) `R.zipObj`
- 1.1.4 Close [issue #71](https://github.com/selfrefactor/rambda/issues/71) CRA fail to build `rambda`
- 1.1.3 Approve [PR #70](https://github.com/selfrefactor/rambda/pull/67) implement `R.groupBy` | Close [issue #69](https://github.com/selfrefactor/rambda/issues/69)
- 1.1.2 Approve [PR #67](https://github.com/selfrefactor/rambda/pull/67) use `babel-plugin-annotate-pure-calls`
- 1.1.1 Approve [PR #66](https://github.com/selfrefactor/rambda/pull/66) `R.zip`
- 1.1.0 `R.compose` accepts more than one input argument [issue #65](https://github.com/selfrefactor/rambda/issues/65)
- 1.0.13 Approve [PR #64](https://github.com/selfrefactor/rambda/pull/64) `R.indexOf`
- 1.0.12 Close [issue #61](https://github.com/selfrefactor/rambda/issues/61) make all functions modules
- 1.0.11 Close [issue #60](https://github.com/selfrefactor/rambda/issues/60) problem with babelrc
- 1.0.10 Close [issue #59](https://github.com/selfrefactor/rambda/issues/59) add R.dissoc
- 1.0.9 Close [issue #58](https://github.com/selfrefactor/rambda/issues/58) - Incorrect `R.equals`
- 1.0.8 `R.map` and `R.filter` pass object properties when mapping over objects
- 1.0.7 Add `R.uniqWith`
- 1.0.6 Close [issue #52](https://github.com/selfrefactor/rambda/issues/52) - ES5 compatible code
- 1.0.5 Close [issue #51](https://github.com/selfrefactor/rambda/issues/51)
- 1.0.4 Close [issue #50](https://github.com/selfrefactor/rambda/issues/50) - add `R.pipe` typings
- 1.0.3 `R.ifElse` accept also boolean as condition argument
- 1.0.2 Remove `typedDefaultTo` and `typedPathOr` | Add `R.pickAll` and `R.none`
- 1.0.0 Major change as build is now ES6 not ES5 compatible (Related to [issue #46](https://github.com/selfrefactor/rambda/issues/46))| Making `Rambda` fully tree-shakeable| Edit Typescript definition
- 0.9.8 Revert to ES5 compatible build - [issue #46](https://github.com/selfrefactor/rambda/issues/46)
- 0.9.7 Refactor for `Rollup` tree-shake | Remove `R.padEnd` and `R.padStart`
- 0.9.6 Close [issue #44](https://github.com/selfrefactor/rambda/issues/44) - `R.reverse` mutates the array
- 0.9.5 Close [issue #45](https://github.com/selfrefactor/rambda/issues/45) - invalid Typescript typings
- 0.9.4 Add `R.reject` and `R.without` ([PR#41](https://github.com/selfrefactor/rambda/pull/41) [PR#42](https://github.com/selfrefactor/rambda/pull/42)) | Remove 'browser' field in `package.json` due to Webpack bug [4674](https://github.com/webpack/webpack/issues/4674)
- 0.9.3 Add `R.forEach` and `R.times`
- 0.9.2 Add `Typescript` definitions
- 0.9.1 Close [issue #36](https://github.com/selfrefactor/rambda/issues/36) - move current behaviour of `defaultTo` to a new method `typedDefaultTo`; make `defaultTo` follow Ramda spec; add `pathOr`; add `typedPathOr`.
- 0.9.0 Add `R.pipe` [PR#35](https://github.com/selfrefactor/rambda/pull/35)
- 0.8.9 Add `R.isNil`
- 0.8.8 Migrate to ES modules [PR33](https://github.com/selfrefactor/rambda/pull/33) | Add R.flip to the API | R.map/filter works with objects
- 0.8.7 Change `Webpack` with `Rollup` - [PR29](https://github.com/selfrefactor/rambda/pull/29)
- 0.8.6 Add `R.tap` and `R.identity`
- 0.8.5 Add `R.all`, `R.allPass`, `R.both`, `R.either` and `R.complement`
- 0.8.4 Learning to run `yarn test` before `yarn publish` the hard way
- 0.8.3 Add `R.always`, `R.T` and `R.F`
- 0.8.2 Add `concat`, `padStart`, `padEnd`, `lastIndexOf`, `toString`, `reverse`, `endsWith` and `startsWith` methods
- 0.8.1 Add `R.ifElse`
- 0.8.0 Add `R.not`, `R.includes` | Take string as condition for `R.pick` and `R.omit`
- 0.7.6 Fix incorrect implementation of `R.values`
- 0.7.5 Fix incorrect implementation of `R.omit`
- 0.7.4 [issue #13](https://github.com/selfrefactor/rambda/issues/13) - Fix `R.curry`, which used to return incorrectly `function` when called with more arguments
- 0.7.3 Close [issue #9](https://github.com/selfrefactor/rambda/issues/9) - Compile to `es2015`; Approve [PR #10](https://github.com/selfrefactor/rambda/pull/10) - add `R.addIndex` to the API
- 0.7.2 Add `Promise` support for `R.type`
- 0.7.1 Close [issue #7](https://github.com/selfrefactor/rambda/issues/7) - add `R.reduce` to the API
- 0.7.0 Close [issue #5](https://github.com/selfrefactor/rambda/issues/5) - change name of `curry` to `partialCurry`; add new method `curry`, which works just like Ramda's `curry`
- 0.6.2 Add separate documentation site via `docsify`

## Additional info

> Running benchmarks

- To run all benchmarks

`yarn benchmark`

> Projects using Rambda

- [tachyons-for-js](https://github.com/devilcoders/tachyons-for-js)

- [react-append-to-body](https://github.com/jpgorman/react-append-to-body)

- [docker-voting-app-nodejs](https://github.com/subfuzion/docker-voting-app-nodejs)

- [ig-api](https://www.npmjs.com/package/ig-api)

- [ldap-authenticate](https://www.npmjs.com/package/ldap-authenticate)

- [mat-che](https://github.com/ianagbip1oti/mat-che)

- [string-fn](https://github.com/selfrefactor/string-fn)

> Projects using Rambdax

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

> Links to Rambda

- (https://mailchi.mp/webtoolsweekly/web-tools-280)[Web Tools Weekly]

- (https://github.com/stoeffel/awesome-fp-js)[awesome-fp-js]

- (https://github.com/docsifyjs/awesome-docsify)[awesome-docsify]