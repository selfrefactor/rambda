import { add } from './add'
import { add as addRamda } from 'ramda'

test('with number', () => {
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2')).toEqual(3)
  expect(add(1, '2')).toEqual(3)
  expect(add(true, false)).toEqual(1)
  expect(add(null, null)).toEqual(0)
  expect(add(undefined, undefined)).toEqual(NaN)
  expect(add(new Date(1), new Date(2))).toEqual(3)
})


const possibleTargets = [
  (x) => x > 2,
  /foo/,
  "foo",
  { a: 1 },
  true,
  3,
  null,
  /bar/g,
  NaN,
  undefined,
  4,
  [],
  [[]],
  [[1], [2]],
  { a: 1 },
  { a: 2 },
  Promise.resolve(1),
];

const possibleIterables = [
  [
    1,
    2,
    new Boolean(true),
    false,
    true,
    new String("foo"),
    new Number(3),
    null,
    undefined,
  ],
  [/foo/g, /bar/, /bar/g, NaN],
  [1, 2, 3],
  [1, [[], []]],
  [{ a: 3 }, { a: 2 }, { a: 1 }],
  {},
  null,
  undefined,
  true,
  "foo",
];

describe("brute force", () => {
  compareCombinations({
    fn: indexOf,
    fnRamda: indexOfRamda,
    firstInput: possibleTargets,
    secondInput: possibleIterables,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 34,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
        }
      `);
    },
  });
});
