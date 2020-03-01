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

- dot notation for `R.path`

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

- Rambda's **path** accepts dot notation(`'x.y' same as ['x','y']`)

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

- Rambda's **partialCurry** is not part of Ramda API.

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

```
R.add(2, 3) // =>  5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/add.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try in REPL</a>

---
#### adjust

> adjust(i: number, replaceFn: Function, arr: T[]): T[]

It replaces `i` index in `arr` with the result of `replaceFn(arr[i])`.

```
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/adjust.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.adjust(%0D%0A%20%200%2C%0D%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0D%0A%20%20%5B0%2C%20100%5D%0D%0A)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try in REPL</a>

---
#### all

> all(fn: Function, arr: T[]): boolean

It returns `true`, if all members of array `arr` returns `true`, when applied as argument to function `fn`.

```
const arr = [ 0, 1, 2, 3, 4 ]
const fn = x => x > -1

const result = R.all(fn, arr)
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/all.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0D%0Aconst%20fn%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0D%0A%0D%0Aconst%20result%20%3D%20R.all(fn%2C%20arr)%0D%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### allPass

> allPass(rules: Function[], input: any): boolean

It returns `true`, if all functions of `rules` return `true`, when `input` is their argument.

```
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

[Source](https://github.com/selfrefactor/rambda/tree/master/src/allPass.js)

<a href="https://rambda.now.sh?const%20input%20%3D%20%7B%0D%0A%20%20a%20%3A%201%2C%0D%0A%20%20b%20%3A%202%2C%0D%0A%7D%0D%0Aconst%20rules%20%3D%20%5B%0D%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0D%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0D%0A%5D%0D%0Aconst%20result%20%3D%20R.allPass(rules)(input)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### always

> always(x: any): Function

It returns function that always returns `x`.

```
const fn = R.always(7)

console.log(fn())// => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/always.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0D%0A%0D%0Aconsole.log(fn())%2F%2F%20%3D%3E%207">Try in REPL</a>

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

```
R.any(a => a * a > 8)([1, 2, 3])
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/any.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.any(a%20%3D%3E%20a%20*%20a%20%3E%208)(%5B1%2C%202%2C%203%5D)%0D%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### anyPass

> anyPass(predicates: Function[]): Function

It returns `true`, if any of `predicates` return `true` with `input` is their argument.

```
const isBig = a => a > 20
const isOdd = a => a % 2 === 1

const result = R.anyPass(
  [isBig, isOdd]
)(11)
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/anyPass.js)

<a href="https://rambda.now.sh?const%20isBig%20%3D%20a%20%3D%3E%20a%20%3E%2020%0D%0Aconst%20isOdd%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%201%0D%0A%0D%0Aconst%20result%20%3D%20R.anyPass(%0D%0A%20%20%5BisBig%2C%20isOdd%5D%0D%0A)(11)%0D%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### append

> append(valueToAppend: T, arr: T[]): T[]

```
R.append(
  'foo',
  ['bar', 'baz']
) // => ['bar', 'baz', 'foo']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/append.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.append(%0D%0A%20%20'foo'%2C%0D%0A%20%20%5B'bar'%2C%20'baz'%5D%0D%0A)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try in REPL</a>

---
#### applySpec

Returns a curried function with the same arity as the longest function in the spec object (max 5 arity). 
Arguments will be applied to the spec methods recursively. This is useful for changing the shape of a json object

> applySpec({ x: Function }, T): T

```
const getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
});
getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }

const spec = {
    name: R.path('user', 'firstname')
}
const json = {
    user: {
        firstname: 'barry'
    }
}
applySpec(spec, json) // => { user: 'barry' }
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/applySpec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20getMetrics%20%3D%20R.applySpec(%7B%0D%0A%20%20sum%3A%20R.add%2C%0D%0A%20%20nested%3A%20%7B%20mul%3A%20R.multiply%20%7D%0D%0A%7D)%3B%0D%0AgetMetrics(2%2C%204)%3B%20%2F%2F%20%3D%3E%20%7B%20sum%3A%206%2C%20nested%3A%20%7B%20mul%3A%208%20%7D%20%7D%0D%0A%0D%0Aconst%20spec%20%3D%20%7B%0D%0A%20%20%20%20name%3A%20R.path('user'%2C%20'firstname')%0D%0A%7D%0D%0Aconst%20json%20%3D%20%7B%0D%0A%20%20%20%20user%3A%20%7B%0D%0A%20%20%20%20%20%20%20%20firstname%3A%20'barry'%0D%0A%20%20%20%20%7D%0D%0A%7D%0D%0AapplySpec(spec%2C%20json)%20%2F%2F%20%3D%3E%20%7B%20user%3A%20'barry'%20%7D">Try in REPL</a>

---
#### assoc

> assoc(prop: any, value: any, obj: object): object

Makes a shallow clone of `obj`, setting or overriding the property `prop` with
the value `value`. Note that this copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```
R.assoc('c', 3, {a: 1, b: 2})
//=> {a: 1, b: 2, c: 3}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/assoc.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0D%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try in REPL</a>

---
#### both

> both(firstCondition: Function, secondCondition: Function, input: any): boolean

It returns `true`, if both function `firstCondition` and function `secondCondition` return `true`, when `input` is their argument.

```
const fn = R.both(
  a => a > 10,
  a => a < 20
)
console.log(fn(15)) //=> true
console.log(fn(30)) //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/both.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.both(%0D%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0D%0A%20%20a%20%3D%3E%20a%20%3C%2020%0D%0A)%0D%0Aconsole.log(fn(15))%20%2F%2F%3D%3E%20true%0D%0Aconsole.log(fn(30))%20%2F%2F%3D%3E%20false">Try in REPL</a>

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

```
const objects = [{}, {}, {}];
const objectsClone = R.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/clone.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20objects%20%3D%20%5B%7B%7D%2C%20%7B%7D%2C%20%7B%7D%5D%3B%0D%0Aconst%20objectsClone%20%3D%20R.clone(objects)%3B%0D%0Aobjects%20%3D%3D%3D%20objectsClone%3B%20%2F%2F%3D%3E%20false%0D%0Aobjects%5B0%5D%20%3D%3D%3D%20objectsClone%5B0%5D%3B%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### compose

> compose(fn1: Function, ... , fnN: Function): any

It performs right-to-left function composition.

```
const result = R.compose(
  R.map(x => x * 2),both
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/compose.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0D%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2Cboth%0D%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0D%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0D%0A%0D%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### complement

> complement(fn: Function): Function

It returns `complemented` function that accept `input` as argument.

The return value of `complemented` is the negative boolean value of `fn(input)`.

```
const fn = R.complement(x => !x)

const result = fn(false) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/complement.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.complement(x%20%3D%3E%20!x)%0D%0A%0D%0Aconst%20result%20%3D%20fn(false)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### concat

> concat(x: T[]|string, y: T[]|string): T[]|string

It returns a new string or array, which is the result of merging `x` and `y`.

```
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo')('bar') // => 'foobar'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/concat.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0D%0AR.concat('foo')('bar')%20%2F%2F%20%3D%3E%20'foobar'">Try in REPL</a>

---
#### curry

> curry(fn: Function): Function

It returns curried version of `fn`.

```
const addFourNumbers = (a, b, c, d) => a + b + c + d
const curriedAddFourNumbers = R.curry(addFourNumbers)
const f = curriedAddFourNumbers(1, 2)
const g = f(3)
const result = g(4) // => 10
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/curry.js)

<a href="https://rambda.now.sh?const%20addFourNumbers%20%3D%20(a%2C%20b%2C%20c%2C%20d)%20%3D%3E%20a%20%2B%20b%20%2B%20c%20%2B%20d%0D%0Aconst%20curriedAddFourNumbers%20%3D%20R.curry(addFourNumbers)%0D%0Aconst%20f%20%3D%20curriedAddFourNumbers(1%2C%202)%0D%0Aconst%20g%20%3D%20f(3)%0D%0Aconst%20result%20%3D%20g(4)%20%2F%2F%20%3D%3E%2010">Try in REPL</a>

---
#### dec

> dec(x: number): number

It decrements a number.

```
R.dec(2) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/dec.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dec(2)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### defaultTo

> defaultTo(defaultValue: T, ...inputArguments: any[]): T

It either returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Or it returns the first truthy `inputArguments` instance(from left to right).

```
R.defaultTo('foo', undefined) // => 'foo'
R.defaultTo('foo', undefined, null, NaN) // => 'foo'
R.defaultTo('foo', undefined, 'bar', NaN, 'baz') // => 'bar'
R.defaultTo('foo', undefined, null, NaN, 'baz') // => 'baz'
R.defaultTo('foo', 'bar') // => 'bar'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/defaultTo.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0D%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN)%20%2F%2F%20%3D%3E%20'foo'%0D%0AR.defaultTo('foo'%2C%20undefined%2C%20'bar'%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'bar'%0D%0AR.defaultTo('foo'%2C%20undefined%2C%20null%2C%20NaN%2C%20'baz')%20%2F%2F%20%3D%3E%20'baz'%0D%0AR.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'">Try in REPL</a>

---
#### dissoc

> dissoc(prop: any, obj: object): object

It returns a new object that does not contain a `prop` property.

```
R.dissoc('b', {a: 1, b: 2, c: 3})
//=> {a: 1, c: 3}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/dissoc.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0D%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try in REPL</a>

---
#### divide

```
R.divide(71, 100) // => 0.71
```

---
#### drop

> drop(howManyToDrop: number, arrOrStr: T[]|string): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the left.

```
R.drop(1, ['foo', 'bar', 'baz']) // => ['bar', 'baz']
R.drop(1, 'foo')  // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/drop.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.drop(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%5D%0D%0AR.drop(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### dropLast

> dropLast(howManyToDrop: number, arrOrStr: T[]|String): T[]|String

It returns `arrOrStr` with `howManyToDrop` items dropped from the right.

```
R.dropLast(1, ['foo', 'bar', 'baz']) // => ['foo', 'bar']
R.dropLast(1, 'foo')  // => 'fo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/dropLast.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.dropLast(1%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D%0D%0AR.dropLast(1%2C%20'foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### endsWith

> endsWith(x: string, str: string): boolean

```
R.endsWith(
  'bar',
  'foo-bar'
) // => true

R.endsWith(
  'foo',
  'foo-bar'
) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/endsWith.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.endsWith(%0D%0A%20%20'bar'%2C%0D%0A%20%20'foo-bar'%0D%0A)%20%2F%2F%20%3D%3E%20true%0D%0A%0D%0AR.endsWith(%0D%0A%20%20'foo'%2C%0D%0A%20%20'foo-bar'%0D%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### either

> either(firstCondition: Function, secondCondition: Function): Function

```
R.either(
  a => a > 10,
  a => a % 2 === 0
)(15) //=> true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/either.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.either(%0D%0A%20%20a%20%3D%3E%20a%20%3E%2010%2C%0D%0A%20%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0D%0A)(15)%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### equals

> equals(a: any, b: any): boolean

It returns equality match between `a` and `b`.

It doesn't handle cyclical data structures.

```
R.equals(
  [1, {a:2}, [{b:3}]],
  [1, {a:2}, [{b:3}]]
) // => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/equals.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.equals(%0D%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%2C%0D%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A3%7D%5D%5D%0D%0A)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### F

`R.F() // => false`

[Source](https://github.com/selfrefactor/rambda/tree/master/src/F.js)

---
#### filter

> filter(filterFn: Function, x: Array|Object): Array|Object

It filters `x` iterable over boolean returning `filterFn`.

```
const filterFn = a => a % 2 === 0

const result = R.filter(filterFn, [1, 2, 3, 4])
// => [2, 4]

const objResult = R.filter(filterFn, {a: 1, b: 2})
// => {b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/filter.js)

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20a%20%3D%3E%20a%20%25%202%20%3D%3D%3D%200%0D%0A%0D%0Aconst%20result%20%3D%20R.filter(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0D%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D%0D%0A%0D%0Aconst%20objResult%20%3D%20R.filter(filterFn%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0D%0A%2F%2F%20%3D%3E%20%7Bb%3A%202%7D">Try in REPL</a>

---
#### find

> find(findFn: Function, arr: T[]): T|undefined

It returns `undefined` or the first element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.find(findFn, arr)
// => {foo: 1}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/find.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0D%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0D%0A%0D%0Aconst%20result%20%3D%20R.find(findFn%2C%20arr)%0D%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try in REPL</a>

---
#### findIndex

> findIndex(findFn: Function, arr: T[]): number

It returns `-1` or the index of the first element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(findFn, arr)
// => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/findIndex.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0D%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0D%0A%0D%0Aconst%20result%20%3D%20R.findIndex(findFn%2C%20arr)%0D%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### findLast

> findLast(findFn: Function, arr: T[]): T|undefined

It returns `undefined` or the last element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findLast(findFn, arr)
// => {foo: 1}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/find.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0D%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0D%0A%0D%0Aconst%20result%20%3D%20R.findLast(findFn%2C%20arr)%0D%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try in REPL</a>

---
#### findLastIndex

> findLastIndex(findFn: Function, arr: T[]): number

It returns `-1` or the last index of the first element of `arr` satisfying `findFn`.

```
const findFn = a => R.type(a.foo) === 'Number'
const arr = [{foo: 'bar'}, {foo: 1}]

const result = R.findLastIndex(findFn, arr)
// => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/findIndex.js)

<a href="https://rambda.now.sh?const%20findFn%20%3D%20a%20%3D%3E%20R.type(a.foo)%20%3D%3D%3D%20'Number'%0D%0Aconst%20arr%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0D%0A%0D%0Aconst%20result%20%3D%20R.findLastIndex(findFn%2C%20arr)%0D%0A%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### flatten

> flatten(arr: any[]): any[]

```
R.flatten([ 1, [ 2, [ 3 ] ] ])
// => [ 1, 2, 3 ]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/flatten.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%201%2C%20%5B%202%2C%20%5B%203%20%5D%20%5D%20%5D)%0D%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%20%5D">Try in REPL</a>

---
#### flip

> flip(fn: Function): Function

It returns function which calls `fn` with exchanged first and second argument.

```
const subtractFlip = R.flip(R.subtract)

const result = subtractFlip(1,7)
// => 6
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/flip.js)

<a href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0D%0A%0D%0Aconst%20result%20%3D%20subtractFlip(1%2C7)%0D%0A%2F%2F%20%3D%3E%206">Try in REPL</a>

---
#### forEach

> forEach(fn: Function, x: Array|Object): Array|Object

It applies function `fn` over all members of iterable `x` and returns `x`.

```
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

console.log(sideEffect) //=> {foo1 : 1, foo2 : 2}
console.log(result) //=> [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/forEach.js)

<a href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0D%0Aconst%20result%20%3D%20R.forEach(%0D%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0D%0A)(%5B1%2C%202%5D)%0D%0A%0D%0Aconsole.log(sideEffect)%20%2F%2F%3D%3E%20%7Bfoo1%20%3A%201%2C%20foo2%20%3A%202%7D%0D%0Aconsole.log(result)%20%2F%2F%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### fromPairs

> fromPairs(list: any[]): object

It transforms a list to an object.

```
const list = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(list)
// expected === result
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/fromPairs.js)

<a href="https://rambda.now.sh?const%20list%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0D%0Aconst%20expected%20%3D%20%7B%0D%0A%20%20a%20%3A%201%2C%0D%0A%20%20b%20%3A%202%2C%0D%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0D%0A%7D%0D%0A%0D%0Aconst%20result%20%3D%20R.fromPairs(list)%0D%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

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

```
R.has('a', {a: 1}) // => true
R.has('b', {a: 1}) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/has.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.has('a'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20true%0D%0AR.has('b'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### head

> head(arrOrStr: T[]|string): T|string

It returns the first element of `arrOrStr`.

```
R.head([1, 2, 3]) // => 1
R.head('foo') // => 'f'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/head.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.head(%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%201%0D%0AR.head('foo')%20%2F%2F%20%3D%3E%20'f'">Try in REPL</a>

---
#### identical

> identical(a: any, b: any): boolean

Returns true if its arguments are identical, false otherwise. Values are identical if they reference the same memory. NaN is identical to NaN; 0 and -0 are not identical.

```
const o = {};
R.identical(o, o); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/identical.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20const%20o%20%3D%20%7B%7D%3B%0D%0AR.identical(o%2C%20o)%3B%20%2F%2F%3D%3E%20true%0D%0AR.identical(1%2C%201)%3B%20%2F%2F%3D%3E%20true%0D%0AR.identical(1%2C%20'1')%3B%20%2F%2F%3D%3E%20false%0D%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%3D%3E%20false%0D%0AR.identical(0%2C%20-0)%3B%20%2F%2F%3D%3E%20false%0D%0AR.identical(NaN%2C%20NaN)%3B%20%2F%2F%3D%3E%20true">Try in REPL</a>

---
#### identity

> identity(x: T): T

It just passes back the supplied arguments.

```
R.identity(7) // => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/identity.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### ifElse

> ifElse(condition: Function|boolean, ifFn: Function, elseFn: Function): Function

It returns another function. When this new function is called with `input` argument, it will return either `ifFn(input)` or `elseFn(input)` depending on `condition(input)` evaluation.

```
const fn = R.ifElse(
 x => x > 10,
 x => x*2,
 x => x*10
)

const result = fn(8)
// => 80
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/ifElse.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0D%0A%20x%20%3D%3E%20x%20%3E%2010%2C%0D%0A%20x%20%3D%3E%20x*2%2C%0D%0A%20x%20%3D%3E%20x*10%0D%0A)%0D%0A%0D%0Aconst%20result%20%3D%20fn(8)%0D%0A%2F%2F%20%3D%3E%2080">Try in REPL</a>

---
#### inc

> inc(x: number): number

It increments a number.

```
R.inc(1) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/inc.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### includes

> includes(valueToFind: T|string, input: T[]|string): boolean

If `input` is string, then this method work as native `includes`.
If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```
R.includes('oo', 'foo') // => true
R.includes({a: 1}, [{a: 1}]) // => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/includes.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.includes('oo'%2C%20'foo')%20%2F%2F%20%3D%3E%20true%0D%0AR.includes(%7Ba%3A%201%7D%2C%20%5B%7Ba%3A%201%7D%5D)%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### indexBy

> indexBy(condition: Function|String, arr: T[]): Object

Generates object with properties provided by `condition` and values provided by `arr`. If `condition` is a string, then it is passed to `R.path`.

```
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

[Source](https://github.com/selfrefactor/rambda/tree/master/src/indexBy.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%20%7Bid%3A%201%7D%2C%20%7Bid%3A%202%7D%20%5D%0D%0Aconst%20result%20%3D%20R.indexBy(%0D%0A%20%20x%20%3D%3E%20x.id%2C%0D%0A%20%20arr%0D%0A)%0D%0Aconst%20pathResult%20%3D%20R.indexBy(%0D%0A%20%20'id'%2C%0D%0A%20%20arr%0D%0A)%0D%0A%2F%2F%20%3D%3E%20%7B%201%3A%20%7Bid%3A%201%7D%2C%202%3A%20%7Bid%3A%202%7D%20%7D%0D%0A%2F%2F%20pathResult%20%3D%3D%3D%20result">Try in REPL</a>

---
#### indexOf

> indexOf(valueToFind: any, arr: T[]): number

It returns `-1` or the index of the first element of `arr` equal of `valueToFind`.

```
R.indexOf(1, [1, 2]) // => 0
R.indexOf(0, [1, 2]) // => -1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/indexOf.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.indexOf(1%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%200%0D%0AR.indexOf(0%2C%20%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### init

> init(arrOrStr: T[]|string): T[]|string

- It returns all but the last element of `arrOrStr`.

```
R.init([1, 2, 3])  // => [1, 2]
R.init('foo')  // => 'fo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/init.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.init(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D%0D%0AR.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### is

> is(xPrototype: any, x: any): boolean

It returns `true` is `x` is instance of `xPrototype`.

```
R.is(String, 'foo')  // => true
R.is(Array, 1)  // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/is.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.is(String%2C%20'foo')%20%20%2F%2F%20%3D%3E%20true%0D%0AR.is(Array%2C%201)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isNil

> isNil(x: any): boolean

It returns `true` is `x` is either `null` or `undefined`.

```
R.isNil(null)  // => true
R.isNil(1)  // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/isNil.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isNil(null)%20%20%2F%2F%20%3D%3E%20true%0D%0AR.isNil(1)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### isEmpty

> isEmpty(x: any): boolean

It returns `true` is `x` is `empty`.

```
R.isEmpty('')  // => true
R.isEmpty({ x : 0 })  // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/isEmpty.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.isEmpty('')%20%20%2F%2F%20%3D%3E%20true%0D%0AR.isEmpty(%7B%20x%20%3A%200%20%7D)%20%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### join

> join(separator: string, arr: T[]): string

```
R.join('-', [1, 2, 3])  // => '1-2-3'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/join.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try in REPL</a>

---
#### keys

> keys(x: Object): string[]

```
R.keys({a:1, b:2})  // => ['a', 'b']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/keys.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try in REPL</a>

---
#### last

> last(arrOrStr: T[]|string): T|string

It returns the last element of `arrOrStr`.

```
R.last(['foo', 'bar', 'baz']) // => 'baz'
R.last('foo') // => 'o'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/last.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.last(%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20'baz'%0D%0AR.last('foo')%20%2F%2F%20%3D%3E%20'o'">Try in REPL</a>

---
#### lastIndexOf

> lastIndexOf(x: any, arr: T[]): number

It returns the last index of `x` in array `arr`.

`R.equals` is used to determine equality between `x` and members of `arr`.

Value `-1` is returned if no `x` is found in `arr`.

```
R.lastIndexOf(1, [1, 2, 3, 1, 2]) // => 3
R.lastIndexOf(10, [1, 2, 3, 1, 2]) // => -1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/lastIndexOf.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.lastIndexOf(1%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%203%0D%0AR.lastIndexOf(10%2C%20%5B1%2C%202%2C%203%2C%201%2C%202%5D)%20%2F%2F%20%3D%3E%20-1">Try in REPL</a>

---
#### length

> length(arrOrStr: Array|String): Number

```
R.length([1, 2, 3]) // => 3
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/length.js)

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

```
const mapFn = x => x * 2
const resultWithArray = R.map(mapFn, [1, 2, 3])
// => [2, 4, 6]

const result = R.map((val, prop)=>{
  return `${prop}-${val}`
}, {a: 1, b: 2})
// => {a: 'a-1', b: 'b-2'}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/map.js)

<a href="https://rambda.now.sh?const%20mapFn%20%3D%20x%20%3D%3E%20x%20*%202%0D%0Aconst%20resultWithArray%20%3D%20R.map(mapFn%2C%20%5B1%2C%202%2C%203%5D)%0D%0A%2F%2F%20%3D%3E%20%5B2%2C%204%2C%206%5D%0D%0A%0D%0Aconst%20result%20%3D%20R.map((val%2C%20prop)%3D%3E%7B%0D%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0D%0A%7D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0D%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try in REPL</a>

---
#### match

> match(regExpression: Regex, str: string): string[]

```
R.match(/([a-z]a)/g, 'bananas') // => ['ba', 'na', 'na']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/match.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%20%2F%2F%20%3D%3E%20%5B'ba'%2C%20'na'%2C%20'na'%5D">Try in REPL</a>

---
#### max

> max(x: Number|String, y: Number|String): Number|String

```
R.max(5,7) // => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/max.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.max(5%2C7)%20%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### maxBy

> maxBy(fn: Function, x: Number|String, y: Number|String): Number|String

```
R.maxBy(Math.abs, 5, -7) // => -7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/maxBy.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.maxBy(Math.abs%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try in REPL</a>

---
#### merge

> merge(a: Object, b: Object)

It returns result of `Object.assign({}, a, b)`.

```
R.merge({ 'foo': 0, 'bar': 1 }, { 'foo': 7 })
// => { 'foo': 7, 'bar': 1 }
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/merge.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.merge(%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%2C%20%7B%20'foo'%3A%207%20%7D)%0D%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try in REPL</a>

---
#### min

> min(x: Number|String, y: Number|String): Number|String

```
R.min(5,7) // => 5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/min.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.min(5%2C7)%20%2F%2F%20%3D%3E%205">Try in REPL</a>

---
#### minBy

> minBy(fn: Function, x: Number|String, y: Number|String): Number|String

```
R.minBy(Math.abs, -5, -7) // => -5
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/minBy.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.minBy(Math.abs%2C%20-5%2C%20-7)%20%2F%2F%20%3D%3E%20-5">Try in REPL</a>

---
#### modulo

> modulo(a: number, b: number):numberNumber

It returns the remainder of operation `a/b`.

```
R.module(14, 3) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/modulo.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.module(14%2C%203)%20%2F%2F%20%3D%3E%202">Try in REPL</a>

---
#### multiply

> multiply(a: number, b: number): number

It returns the result of operation `a*b`.

```
R.multiply(4, 3) // => 12
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/multiply.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(4%2C%203)%20%2F%2F%20%3D%3E%2012">Try in REPL</a>

---
#### not

> not(x: any): boolean

It returns inverted boolean version of input `x`.

```
R.not(true) //=> false
R.not(false) //=> true
R.not(0) //=> true
R.not(1) //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/not.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.not(true)%20%2F%2F%3D%3E%20false%0D%0AR.not(false)%20%2F%2F%3D%3E%20true%0D%0AR.not(0)%20%2F%2F%3D%3E%20true%0D%0AR.not(1)%20%2F%2F%3D%3E%20false">Try in REPL</a>

---
#### omit

> omit(propsToOmit: string[]|string, obj: Object): Object

It returns a partial copy of an `obj` with omitting `propsToOmit`

```
R.omit('a,c,d', {a: 1, b: 2, c: 3}) // => {b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/omit.js)

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

```
R.path('a.b', {a: {b: 1}}) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/path.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.path('a.b'%2C%20%7Ba%3A%20%7Bb%3A%201%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

---
#### pathOr

> pathOr(defaultValue: any, pathToSearch: string[]|string, obj: Object): any

`pathFound` is the result of calling `R.path(pathToSearch, obj)`.

If `pathFound` is `undefined`, `null` or `NaN`, then `defaultValue` will be returned.

`pathFound` is returned in any other case.

```
R.pathOr(1, 'a.b', {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'b'], {a: {b: 2}}) // => 2
R.pathOr(1, ['a', 'c'], {a: {b: 2}}) // => 1
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pathOr.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pathOr(1%2C%20'a.b'%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%202%0D%0AR.pathOr(1%2C%20%5B'a'%2C%20'b'%5D%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%202%0D%0AR.pathOr(1%2C%20%5B'a'%2C%20'c'%5D%2C%20%7Ba%3A%20%7Bb%3A%202%7D%7D)%20%2F%2F%20%3D%3E%201">Try in REPL</a>

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
#### partialCurry

> partialCurry(fn: Function|Async, partialInput: Object, input: Object): Function|Promise

When called with function `fn` and first set of input `partialInput`, it will return a function.

This function will wait to be called with second set of input `input` and it will invoke `fn` with the merged object of `partialInput` over `input`.

`fn` can be asynchronous function. In that case a `Promise` holding the result of `fn` is returned.

```
const fn = ({a, b, c}) => {
  return (a * b) + c
}
const curried = R.partialCurry(fn, {a: 2})
const result = curried({b: 3, c: 10})
// => 16
```

- Note that `partialCurry` is method specific for **Rambda** and the method is not part of **Ramda**'s API

- You can read my argumentation for creating _partialCurry_ [here](https://ilearnsmarter.wordpress.com/2018/12/20/argumentation-of-rambdas-partialcurry-method/)

[Source](https://github.com/selfrefactor/rambda/tree/master/src/partialCurry.js)

<a href="https://rambda.now.sh?const%20fn%20%3D%20(%7Ba%2C%20b%2C%20c%7D)%20%3D%3E%20%7B%0D%0A%20%20return%20(a%20*%20b)%20%2B%20c%0D%0A%7D%0D%0Aconst%20curried%20%3D%20R.partialCurry(fn%2C%20%7Ba%3A%202%7D)%0D%0Aconst%20result%20%3D%20curried(%7Bb%3A%203%2C%20c%3A%2010%7D)%0D%0A%2F%2F%20%3D%3E%2016">Try in REPL</a>

---
#### pick

> pick(propsToPick: string[], obj: Object): Object

It returns a partial copy of an `obj` containing only `propsToPick` properties.

```
R.pick(['a', 'c'], {a: 1, b: 2}) // => {a: 1}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pick.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pick(%5B'a'%2C%20'c'%5D%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Ba%3A%201%7D">Try in REPL</a>

---
#### pipe

> pipe(fn1: Function, ... , fnN: Function): any

It performs left-to-right function composition.

```
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pipe.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0D%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0D%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0D%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0D%0A%0D%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try in REPL</a>

---
#### pluck

> pluck(property: string, arr: Object[]): any[]

It returns list of the values of `property` taken from the objects in array of objects `arr`.

```
R.pluck('a')([{a: 1}, {a: 2}, {b: 3}]) // => [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/pluck.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.pluck('a')(%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### prepend

> prepend(x: T, arr: T[]): T[]

It adds `x` to the start of the array `arr`.

```
R.prepend('foo', ['bar', 'baz']) // => ['foo', 'bar', 'baz']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/prepend.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prepend('foo'%2C%20%5B'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D">Try in REPL</a>

---
#### prop

> prop(propToFind: string, obj: Object): any

It returns `undefined` or the value of property `propToFind` in `obj`

```
R.prop('x', {x: 100}) // => 100
R.prop('x', {a: 1}) // => undefined
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/prop.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%20%2F%2F%20%3D%3E%20100%0D%0AR.prop('x'%2C%20%7Ba%3A%201%7D)%20%2F%2F%20%3D%3E%20undefined">Try in REPL</a>

---
#### propEq

> propEq(propToFind: string, valueToMatch: any, obj: Object): boolean

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```
const propToFind = 'foo'
const valueToMatch = 0

const result = R.propEq(propToFind, valueToMatch)({foo: 0})
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/propEq.js)

<a href="https://rambda.now.sh?const%20propToFind%20%3D%20'foo'%0D%0Aconst%20valueToMatch%20%3D%200%0D%0A%0D%0Aconst%20result%20%3D%20R.propEq(propToFind%2C%20valueToMatch)(%7Bfoo%3A%200%7D)%0D%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### propIs

> propIs(type: any, name: string, obj: Object): boolean

It Returns `true` if the specified object property is of the given type.

```
R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
R.propIs(Number, 'x', {x: 'foo'});    //=> false
R.propIs(Number, 'x', {});            //=> false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/propIs.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.propIs(Number%2C%20'x'%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%3B%20%20%2F%2F%3D%3E%20true%0D%0AR.propIs(Number%2C%20'x'%2C%20%7Bx%3A%20'foo'%7D)%3B%20%20%20%20%2F%2F%3D%3E%20false%0D%0AR.propIs(Number%2C%20'x'%2C%20%7B%7D)%3B%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%3D%3E%20false">Try in REPL</a>

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

```
R.range(0, 3)   // => [0, 1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/range.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%203)%20%20%20%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%5D">Try in REPL</a>

---
#### reduce

> reduce(iteratorFn: Function, accumulator: any, array: T[]): any

```
const iteratorFn = (acc, val) => acc + val
const result = R.reduce(iteratorFn, 1, [1, 2, 3])
// => 7
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/reduce.js)

<a href="https://rambda.now.sh?const%20iteratorFn%20%3D%20(acc%2C%20val)%20%3D%3E%20acc%20%2B%20val%0D%0Aconst%20result%20%3D%20R.reduce(iteratorFn%2C%201%2C%20%5B1%2C%202%2C%203%5D)%0D%0A%2F%2F%20%3D%3E%207">Try in REPL</a>

---
#### reject

> reject(filterFn: Function, arr: T[]): T[]

It has the opposite effect of `R.filter`.

It will return those members of `arr` that return `false` when applied to function `filterFn`.

```
const filterFn = x => x % 2 === 1

const result = R.reject(filterFn, [1, 2, 3, 4])
// => [2, 4]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/reject.js)

<a href="https://rambda.now.sh?const%20filterFn%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0D%0A%0D%0Aconst%20result%20%3D%20R.reject(filterFn%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0D%0A%2F%2F%20%3D%3E%20%5B2%2C%204%5D">Try in REPL</a>

---
#### repeat

> repeat(valueToRepeat: T, num: number): T[]

```
R.repeat('foo', 2) // => ['foo', 'foo']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/repeat.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%202)%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%5D">Try in REPL</a>

---
#### replace

> replace(strOrRegex: string|Regex, replacer: string, str: string): string

It replaces `strOrRegex` found in `str` with `replacer`.

```
R.replace('foo', 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/, 'bar', 'foo foo') // => 'bar foo'
R.replace(/foo/g, 'bar', 'foo foo') // => 'bar bar'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/replace.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.replace('foo'%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0D%0AR.replace(%2Ffoo%2F%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20foo'%0D%0AR.replace(%2Ffoo%2Fg%2C%20'bar'%2C%20'foo%20foo')%20%2F%2F%20%3D%3E%20'bar%20bar'">Try in REPL</a>

---
#### reverse

> reverse(str: T[]): T[]

```
const arr = [1, 2]

const result = R.reverse(arr)
// => [2, 1]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/reverse.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B1%2C%202%5D%0D%0A%0D%0Aconst%20result%20%3D%20R.reverse(arr)%0D%0A%2F%2F%20%3D%3E%20%5B2%2C%201%5D">Try in REPL</a>

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

```
const sortFn = (a, b) => a - b

const result = R.sort(sortFn, [3, 1, 2])
// => [1, 2, 3]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/sort.js)

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20(a%2C%20b)%20%3D%3E%20a%20-%20b%0D%0A%0D%0Aconst%20result%20%3D%20R.sort(sortFn%2C%20%5B3%2C%201%2C%202%5D)%0D%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%5D">Try in REPL</a>

---
#### sortBy

> sortBy(sortFn: Function, arr: T[]): T[]

It returns copy of `arr` sorted by `sortFn`.

Note that `sortFn` must return value for comparison.

```
const sortFn = obj => obj.foo

const result = R.sortBy(sortFn, [
  {foo: 1},
  {foo: 0}
])

const expectedResult = [ {foo: 0}, {foo: 1} ]
console.log(R.equals(result, expectedResult))
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/sortBy.js)

<a href="https://rambda.now.sh?const%20sortFn%20%3D%20obj%20%3D%3E%20obj.foo%0D%0A%0D%0Aconst%20result%20%3D%20R.sortBy(sortFn%2C%20%5B%0D%0A%20%20%7Bfoo%3A%201%7D%2C%0D%0A%20%20%7Bfoo%3A%200%7D%0D%0A%5D)%0D%0A%0D%0Aconst%20expectedResult%20%3D%20%5B%20%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%20%5D%0D%0Aconsole.log(R.equals(result%2C%20expectedResult))%0D%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### split

> split(separator: string, str: string): string[]

```
R.split('-', 'a-b-c') // => ['a', 'b', 'c']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/split.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.split('-'%2C%20'a-b-c')%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%2C%20'c'%5D">Try in REPL</a>

---
#### splitEvery

> splitEvery(sliceLength: number, arrOrString: T[]|string): T[T[]]|string[]

It splits `arrOrStr` into slices of `sliceLength`.

```
R.splitEvery(2, [1, 2, 3]) // => [[1, 2], [3]]
R.splitEvery(3, 'foobar') // => ['foo', 'bar']
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/splitEvery.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.splitEvery(2%2C%20%5B1%2C%202%2C%203%5D)%20%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20%5B3%5D%5D%0D%0AR.splitEvery(3%2C%20'foobar')%20%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%5D">Try in REPL</a>

---
#### startsWith

> startsWith(x: string, str: string): boolean

```
R.startsWith(
  'foo',
  'foo-bar'
) // => true

R.startsWith(
  'bar',
  'foo-bar'
) // => false
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/startsWith.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.startsWith(%0D%0A%20%20'foo'%2C%0D%0A%20%20'foo-bar'%0D%0A)%20%2F%2F%20%3D%3E%20true%0D%0A%0D%0AR.startsWith(%0D%0A%20%20'bar'%2C%0D%0A%20%20'foo-bar'%0D%0A)%20%2F%2F%20%3D%3E%20false">Try in REPL</a>

---
#### subtract

> subtract(a: number, b: number): number

```
R.subtract(3, 1) // => 2
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/subtract.js)

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

```
R.tail([1, 2, 3])  // => [2, 3]
R.tail('foo')  // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/tail.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.tail(%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20%5B2%2C%203%5D%0D%0AR.tail('foo')%20%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### take

> take(num: number, arrOrStr: T[]|string): T[]|string

It returns the first `num` elements of `arrOrStr`.

```
R.take(1, ['foo', 'bar']) // => ['foo']
R.take(2, 'foo') // => 'fo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/take.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.take(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0D%0AR.take(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'fo'">Try in REPL</a>

---
#### takeLast

> takeLast(num: number, arrOrStr: T[]|string): T[]|string

It returns the last `num` elements of `arrOrStr`.

```
R.takeLast(1, ['foo', 'bar']) // => ['bar']
R.takeLast(2, 'foo') // => 'oo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/takeLast.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.takeLast(1%2C%20%5B'foo'%2C%20'bar'%5D)%20%2F%2F%20%3D%3E%20%5B'bar'%5D%0D%0AR.takeLast(2%2C%20'foo')%20%2F%2F%20%3D%3E%20'oo'">Try in REPL</a>

---
#### tap

> tap(fn: Function, input: T): T

It applies function to input and pass the input back. Use case is debuging in the middle of `R.compose`.

```
let a = 1
const sayX = x => (a = x)

const result = R.tap(sayX, 100)
// both `a` and `result` are `100`
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/tap.js)

<a href="https://rambda.now.sh?let%20a%20%3D%201%0D%0Aconst%20sayX%20%3D%20x%20%3D%3E%20(a%20%3D%20x)%0D%0A%0D%0Aconst%20result%20%3D%20R.tap(sayX%2C%20100)%0D%0A%2F%2F%20both%20%60a%60%20and%20%60result%60%20are%20%60100%60">Try in REPL</a>

---
#### test

> test(regExpression: Regex, str: string): boolean

Determines whether `str` matches `regExpression`

```
R.test(/^f/, 'foo')
// => true
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/test.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F%2C%20'foo')%0D%0A%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### times

> times(fn: Function, n: number): T[]

It returns the result of applying function `fn` over members of range array.
The range array includes numbers between `0` and `n`(exclusive).

```
R.times(R.identity, 5)
//=> [0, 1, 2, 3, 4]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/times.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.times(R.identity%2C%205)%0D%0A%2F%2F%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try in REPL</a>

---
#### toLower

> toLower(str: string): string

```
R.toLower('FOO') // => 'foo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toLower.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### toPairs

> toPairs(obj: object): any[]

It transforms an object to a list.

```
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// expected === result
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toPairs.js)

<a href="https://rambda.now.sh?const%20list%20%3D%20%7B%0D%0A%20%20a%20%3A%201%2C%0D%0A%20%20b%20%3A%202%2C%0D%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0D%0A%7D%0D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0D%0A%0D%0Aconst%20result%20%3D%20R.toPairs(list)%0D%0A%2F%2F%20expected%20%3D%3D%3D%20result">Try in REPL</a>

---
#### toString

> toString(x: any): string

```
R.toString([1, 2]) // => '1,2'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toString.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%2F%2F%20%3D%3E%20'1%2C2'">Try in REPL</a>

---
#### toUpper

> toUpper(str: string): string

```
R.toUpper('foo') // => 'FOO'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/toUpper.js)

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

```
R.trim('  foo  ') // => 'foo'
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/trim.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%2F%2F%20%3D%3E%20'foo'">Try in REPL</a>

---
#### type

> type(a: any): string

```
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

[Source](https://github.com/selfrefactor/rambda/tree/master/src/type.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.type(()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Function'%0D%0AR.type(async%20()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Async'%0D%0AR.type(%5B%5D)%20%2F%2F%20%3D%3E%20'Array'%0D%0AR.type(%7B%7D)%20%2F%2F%20%3D%3E%20'Object'%0D%0AR.type('foo')%20%2F%2F%20%3D%3E%20'String'%0D%0AR.type(1)%20%2F%2F%20%3D%3E%20'Number'%0D%0AR.type(true)%20%2F%2F%20%3D%3E%20'Boolean'%0D%0AR.type(null)%20%2F%2F%20%3D%3E%20'Null'%0D%0AR.type(%2F%5BA-z%5D%2F)%20%2F%2F%20%3D%3E%20'RegExp'%0D%0A%0D%0Aconst%20delay%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0D%0A%20%20setTimeout(function%20()%20%7B%0D%0A%20%20%20%20resolve()%0D%0A%20%20%7D%2C%20ms)%0D%0A%7D)%0D%0AR.type(delay)%20%2F%2F%20%3D%3E%20'Promise'">Try in REPL</a>

---
#### uniq

> uniq(arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr`.

```
R.uniq([1, 1, 2, 1])
// => [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/uniq.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.uniq(%5B1%2C%201%2C%202%2C%201%5D)%0D%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

---
#### uniqWith

> uniqWith(fn: Function, arr: T[]): T[]

It returns a new array containing only one copy of each element in `arr` according to boolean returning function `fn`.

```
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

[Source](https://github.com/selfrefactor/rambda/tree/master/src/uniqWith.js)

<a href="https://rambda.now.sh?const%20arr%20%3D%20%5B%0D%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0D%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0D%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0D%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0D%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0D%0A%5D%0D%0A%0D%0Aconst%20expectedResult%20%3D%20%5B%0D%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0D%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0D%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0D%0A%5D%0D%0A%0D%0Aconst%20fn%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0D%0A%0D%0Aconst%20result%20%3D%20R.uniqWith(fn%2C%20arr)%0D%0A%0D%0Aconsole.log(R.equals(result%2C%20expectedResult))%20%2F%2F%20%3D%3E%20true">Try in REPL</a>

---
#### update

> update(i: number, replaceValue: T, arr: T[]): T[]

It returns a new copy of the `arr` with the element at `i` index
replaced with `replaceValue`.

```
R.update(0, 'foo', ['bar', 'baz'])
// => ['foo', baz]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/update.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.update(0%2C%20'foo'%2C%20%5B'bar'%2C%20'baz'%5D)%0D%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20baz%5D">Try in REPL</a>

---
#### values

> values(obj: Object): Array

It returns array with of all values in `obj`.

```
R.values({a: 1, b: 2})
// => [1, 2]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/values.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.values(%7Ba%3A%201%2C%20b%3A%202%7D)%0D%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try in REPL</a>

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

```
R.without([1, 2], [1, 2, 3, 4])
// => [3, 4]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/without.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.without(%5B1%2C%202%5D%2C%20%5B1%2C%202%2C%203%2C%204%5D)%0D%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try in REPL</a>

---
#### zip

> zip(a: K[], b: V[]): Array

It will return a new array containing tuples of equally positions items from both lists. The returned list will be truncated to match the length of the shortest supplied list.

```
R.zip([1, 2], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([1, 2, 3, 4], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/zip.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.zip(%5B1%2C%202%5D%2C%20%5B'A'%2C%20'B'%5D)%0D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0D%0A%0D%0A%2F%2F%20truncates%20to%20shortest%20list%0D%0AR.zip(%5B1%2C%202%2C%203%2C%204%5D%2C%20%5B'A'%2C%20'B'%5D)%0D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try in REPL</a>

---
#### zipObj

> zipObj(a: K[], b: V[]): Object

It will return a new object with keys of `a` array and values of `b` array.

```
R.zipObj(['a', 'b', 'c'], [1, 2, 3])
//=> {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(['a', 'b', 'c'], [1, 2])
//=> {a: 1, b: 2}
```

[Source](https://github.com/selfrefactor/rambda/tree/master/src/zipObj.js)

<a href="https://rambda.now.sh?const%20result%20%3D%20R.zipObj(%5B'a'%2C%20'b'%2C%20'c'%5D%2C%20%5B1%2C%202%2C%203%5D)%0D%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0D%0A%0D%0A%2F%2F%20truncates%20to%20shortest%20list%0D%0AR.zipObj(%5B'a'%2C%20'b'%2C%20'c'%5D%2C%20%5B1%2C%202%5D)%0D%0A%2F%2F%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%7D">Try in REPL</a>

---
#### ---

## Use with ES5

```
import omit from 'rambda/lib/omit'
```

> Latest version that has this feature is `2.3.1`

## Changelog

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

- [Argumentation of Rambda's curry method](https://ilearnsmarter.wordpress.com/2018/12/20/argumentation-of-rambdas-partialcurry-method/)

> Links to Rambda

- (https://mailchi.mp/webtoolsweekly/web-tools-280)[Web Tools Weekly]

- (https://github.com/stoeffel/awesome-fp-js)[awesome-fp-js]

- (https://github.com/docsifyjs/awesome-docsify)[awesome-docsify]