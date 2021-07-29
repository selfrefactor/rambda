import { indexOf } from "./indexOf";
import { indexOf as indexOfRamda } from "ramda";
import { compareCombinations } from "./_internals/testUtils";

test("with NaN", () => {
  expect(indexOf(NaN, [NaN])).toEqual(0);
});

test("will throw with bad input", () => {
  expect(indexOfRamda([], true)).toEqual(-1);
  expect(() => indexOf([], true)).toThrow();
});

test("without list of objects - no R.equals", () => {
  expect(indexOf(3, [1, 2, 3, 4])).toEqual(2);
  expect(indexOf(10)([1, 2, 3, 4])).toEqual(-1);
});

test("list of objects uses R.equals", () => {
  const listOfObjects = [{ a: 1 }, { b: 2 }, { c: 3 }];
  expect(indexOf({ c: 4 }, listOfObjects)).toBe(-1);
  expect(indexOf({ c: 3 }, listOfObjects)).toBe(2);
});

test("list of arrays uses R.equals", () => {
  const listOfLists = [[1], [2, 3], [2, 3, 4], [2, 3], [1], []];
  expect(indexOf([], listOfLists)).toBe(5);
  expect(indexOf([1], listOfLists)).toBe(0);
  expect(indexOf([2, 3, 4], listOfLists)).toBe(2);
  expect(indexOf([2, 3, 5], listOfLists)).toBe(-1);
});

const possibleTargets = [
  (x) => x > 2,
  /foo/,
  "foo",
  { a: 1 },
  [],
  [[]],
  [[1], [2]],
  { a: 1 },
  { a: 2 },
  Promise.resolve(1),
];

const possibleIterables = [
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
          "ERRORS_TYPE_MISMATCH": 20,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 30,
          "SHOULD_THROW": 0,
        }
      `);
    },
  });
});
