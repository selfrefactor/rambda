# equals / uniq — dropped review commits, and what Ramda actually does

Two commits were dropped from `next-version` on 2026-11-16. They are still
reachable on `origin/next-version` and locally by hash:

| Commit | Subject |
|---|---|
| `b193b3b7` | `fix(equals): one-to-one matching for Set and Map comparison` |
| `a5d77e5` | `fix(equals,uniq): apply review follow-up suggestions` |

Base after the drop: `9ea604ca` (`fix(union): remove duplicates from both lists`).

Reference points:

- **Ramda 0.32.0** — npm `latest`, published 2025-10-10.
- **Ramda master** — includes changes merged after 0.32.0.

The analysis below says which parts of the dropped commits are worth
re-implementing. Short version: almost all of `b193b3b7`, and three of the four
hunks in `a5d77e5`; only the `Object.create(null)` / `Object.hasOwn` change is
unnecessary.

---

## 1. Set and Map comparison must consume members one-to-one (from `b193b3b7`)

### Current behaviour at `9ea604ca`

`_compareSets` uses containment only:

```js
const filtered = aList.filter(aInstance => _indexOf(aInstance, bList) === -1)
return filtered.length === 0
```

`_compareMaps` uses `every` / `some`:

```js
return aEntries.every(([aKey, aValue]) =>
  bEntries.some(([bKey, bValue]) => equalsFn(aKey, bKey) && equalsFn(aValue, bValue)),
)
```

Both let a single member of `b` satisfy several members of `a`, so collections
with value-equal but reference-distinct members compare as equal when they are
not:

```js
const a = new Set([{ x: 1 }, { x: 1 }])
const b = new Set([{ x: 1 }, { x: 2 }])
equals(a)(b) // true — wrong
```

The result also depends on argument order, so `equals` is not commutative
there.

### Ramda

- **0.32.0** has the same defect. `_uniqContentEquals` in
  `es/internal/_equals.js` only checks that every member of `a` is contained
  somewhere in `b`, and relies on equal size plus "members are unique" — which
  Set/Map only guarantee by reference, not by value.
- **master**, commit `e31ee01` (2026-07-18, PR #3534) — *fix: compare Set and
  Map members as a multiset in equals*. Members are matched greedily: each
  element of `a` consumes the first not-yet-consumed value-equal element of
  `b`. Used for both `Set.values()` and `Map.entries()`.
- Upstream test additions assert `Set([{v:1},{v:1}])` vs `Set([{v:1},{v:2}])`
  is `false` in both directions, plus the equal-multiplicity case
  `[{v:1},{v:1},{v:2}]` vs `[{v:1},{v:2},{v:2}]`.

### What to restore

```js
function _hasEqualInstance(value, list, usedIndexes) {
  let index = -1

  while (++index < list.length) {
    if (!usedIndexes[index] && equalsFn(value, list[index])) {
      usedIndexes[index] = true

      return true
    }
  }

  return false
}

function _compareIterables(aList, bList) {
  const usedIndexes = {}
  let index = -1

  while (++index < aList.length) {
    if (!_hasEqualInstance(aList[index], bList, usedIndexes)) {
      return false
    }
  }

  return true
}

function _compareSets(a, b) {
  if (a.size !== b.size) {
    return false
  }

  return _compareIterables(
    _arrayFromIterator(a.values()),
    _arrayFromIterator(b.values()),
  )
}

function _compareMaps(a, b) {
  if (a.size !== b.size) {
    return false
  }

  return _compareIterables(
    _arrayFromIterator(a.entries()),
    _arrayFromIterator(b.entries()),
  )
}
```

Tests to bring back (`source/equals.spec.ts`):

```js
test('with map object keys and different values', () => {
  expect(
    equals(new Map([[{ x: 1 }, 1]]))(new Map([[{ x: 1 }, 2]])),
  ).toBeFalsy()
})

test('does not double-match equal values', () => {
  const mapA = new Map([
    [{ x: 1 }, 1],
    [{ x: 1 }, 1],
  ])
  const mapB = new Map([
    [{ x: 1 }, 1],
    [{ x: 2 }, 1],
  ])
  expect(equals(mapA)(mapB)).toBeFalsy()
  expect(equals(mapB)(mapA)).toBeFalsy()

  const setA = new Set([{ x: 1 }, { x: 1 }])
  const setB = new Set([{ x: 1 }, { x: 2 }])
  expect(equals(setA)(setB)).toBeFalsy()
  expect(equals(setB)(setA)).toBeFalsy()
})
```

Verdict: **re-implement**. This is a real correctness fix and matches upstream
master, one release ahead of npm. The only difference from upstream is cycle
handling: upstream threads `stackA` / `stackB` through each member comparison,
while Rambda's `equalsFn` has no cycle stack at all (see §5).

---

## 2. Nested `-0` vs `0` (from `a5d77e5`)

`equalsFn` starts with `Object.is`, so the top level is already correct:
`equals(0)(-0)` is `false`. Nested positions are not, because the array and
object loops use a `!==` fast path:

```js
if (aCloneInstance !== bClone[aCloneIndex] && !equalsFn(...)) // array items
if (aValue !== bValue && !equalsFn(aValue, bValue))           // object values
```

`-0 !== 0` is `false`, so the fast path declares the values equal and the
recursive compare never runs. Result at `9ea604ca`:

```js
equals([-0])([0])           // true — Ramda returns false
equals({ a: -0 })({ a: 0 }) // true — Ramda returns false
```

Ramda's `_equals` recurses through `_equals` at every level and each call starts
with `_objectIs` (`source/internal/_objectIs.js`), so nested `-0` and `0` are
distinct.

Fix (two lines, `source/equals.js`):

```js
!Object.is(aCloneInstance, bClone[aCloneIndex]) &&
  !equalsFn(aCloneInstance, bClone[aCloneIndex])
```

```js
if (!Object.is(aValue, bValue) && !equalsFn(aValue, bValue)) {
```

Tests (`source/equals.spec.ts`):

```js
test('distinguishes -0 from 0 in nested values', () => {
  expect(equals([-0])([0])).toBeFalsy()
  expect(equals({ a: -0 })({ a: 0 })).toBeFalsy()
})
```

Verdict: **re-implement**.

---

## 3. `uniq` and boxed primitives (from `a5d77e5`)

At `9ea604ca`, `source/_internals/set.js` selects the native `Set` fast path by
`type()` name:

```js
const primitiveTypes = ['Boolean', 'BigInt', 'Number', 'String', 'Symbol']
...
if (primitiveTypes.includes(type)) {
```

A boxed `new Number(1)` has `type()` `'Number'`, so it is treated as a
primitive and stored in the native `Set`, which compares by identity. Duplicates
are kept:

```js
uniq([new Number(1), new Number(1)]) // length 2
```

Ramda routes boxed primitives to the `[object Number]` bucket and deep-compares
them through `_includes` → `_indexOf` → `equals`, so the result is length 1.
Same for `new String('a')` and `new Boolean(true)`.

Fix — match on `typeof` instead of `type()`:

```js
const primitiveTypes = ['bigint', 'boolean', 'number', 'string', 'symbol']
...
if (primitiveTypes.includes(typeof item)) {
```

This is the only behaviour-changing part of that hunk: unboxed primitives still
take the native `Set` path, boxed wrappers now fall through to the deep compare.
Tests (`source/uniq.spec.ts`):

```js
test('with boxed primitives', () => {
  expect(uniq([new Number(1), new Number(1)])).toHaveLength(1)
  expect(uniq([new String('a'), new String('a')])).toHaveLength(1)
})
```

Verdict: **re-implement**.

### Do not carry over

`this.items = Object.create(null)` plus `Object.hasOwn(this.items, type)` is
unnecessary. `type()` only produces `'Null'`, `'Undefined'`, `'NaN'`, `'Object'`,
`'Array'`, `'Map'`, … — none of which collide with `Object.prototype` — so the
original `{}` + `in` is already safe. Ramda still uses a plain object and `in`.
The two changes are also redundant with each other (a null-prototype object makes
`in` equivalent to an own-property check) and introduce an ES2022 builtin where a
plain `in` would do.

---

## 4. Docs and stale test titles (from `a5d77e5`)

`files/index.d.ts` says:

```
Explanation: It uses `R.equals` for list of objects/arrays or native `indexOf` for any other case.
```

That is false since `82d099c2` (*use R.equals in \_indexOf and \_lastIndexOf for
all types*): `_indexOf` and `_lastIndexOf` call `equalsFn` for every element.
Ramda's own doc says `R.equals` determines equality. Replace with:

```
Explanation: It uses `R.equals` for every list element.
```

Also rename the stale `source/lastIndexOf.spec.ts` title
`'without list of objects - no R.equals'` → `'with numbers'`.

Verdict: **re-implement** (correctness of documentation only).

---

## 5. Related gaps not covered by the dropped commits

1. **`uniq` does not distinguish `0` from `-0`.** Ramda's `_Set` special-cases
   `-0` before using the native `Set`, so `R.uniq([0, -0]).length === 2`
   (upstream `test/uniq.js` asserts this, and `uniq([-0, -0]).length === 1`).
   Rambda's native `Set` uses SameValueZero, so it returns length 1.
2. **`uniqBy` / `duplicateBy` use a stale generated `_Set`.**
   `source/uniqBy.js` and `source/duplicateBy.js` import
   `../src/_internals/set.js`, which was last updated in the 10.0.0 release and
   still contains `!['Object', 'Array'].includes(type)`. Only `uniq` imports
   `./_internals/set.js`. Fix the import to `./_internals/set.js` (or regenerate
   `src/`) before expecting §3 to apply to `uniqBy` / `duplicateBy`.
3. **No cycle detection in `equalsFn`.** Ramda's `_equals` carries
   `stackA` / `stackB`, so cyclical structures terminate and compare correctly.
   Rambda's `equalsFn` has no stack, so self-referencing objects, Sets and Maps
   recurse until the stack overflows. Pre-existing, unrelated to both dropped
   commits.
4. **Boxed vs primitive equality diverges from Ramda.**
   `equalsFn(new Number(1), 1)` is `true` in Rambda (both have `type()`
   `'Number'`, then `toString()` matches). Ramda returns `false`: its `Number`
   case requires `typeof a === typeof b`. Pre-existing; §3 deliberately leaves
   this alone.

---

## 6. Verification

After re-implementing any subset:

```sh
yarn lint:typings
yarn test:ci
yarn test:typings
```

Targeted runs while iterating: `source/equals.spec.ts`, `source/uniq.spec.ts`,
`source/uniqBy.spec.ts`, `source/duplicateBy.spec.ts`,
`source/lastIndexOf.spec.ts`, `source/union.spec.ts`.

Recover the dropped work with `git show b193b3b7` / `git show a5d77e5` (the
objects remain reachable from `origin/next-version`).
