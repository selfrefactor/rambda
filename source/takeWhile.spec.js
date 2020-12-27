import { takeWhile as takeWhileRamda } from "ramda";

import { takeWhile } from "./takeWhile";
import { compareCombinations } from "./_internals/testUtils";

const list = [1, 2, 3, 4, 5];

test("happy", () => {
  const result = takeWhile((x) => x < 3, list);
  expect(result).toEqual([1, 2]);
});

test("always true", () => {
  const result = takeWhile((x) => true)(list);
  expect(result).toEqual(list);
});

test("always false", () => {
  const result = takeWhile((x) => 0, list);
  expect(result).toEqual([]);
});

test("with string", () => {
  const result = takeWhile((x) => x !== "b", "foobar");
  expect(result).toBe("foo");
});

const possiblePredicates = [
  null,
  undefined,
  () => 0,
  () => true,
  (x) => x !== "b",
  /foo/g,
  {},
  [],
];

const possibleIterables = [
  null,
  undefined,
  [],
  {},
  1,
  "",
  "foobar",
  [""],
  [1, 2, 3, 4, 5],
];

describe("brute force", () => {
  compareCombinations({
    firstInput: possiblePredicates,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 15,
          "ERRORS_TYPE_MISMATCH": 16,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 16,
          "SHOULD_THROW": 0,
        }
      `);
    },
    secondInput: possibleIterables,
    fn: takeWhile,
    fnRamda: takeWhileRamda,
  });
});
