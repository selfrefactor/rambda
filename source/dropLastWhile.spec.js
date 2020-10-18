import { dropLastWhile as dropLastWhileRamda } from "ramda";

import { compareCombinations } from "./_internals/testUtils";
import { dropLastWhile } from "./dropLastWhile";

const list = [1, 2, 3, 4, 5];
const str = "foobar";

test("with list", () => {
  const result = dropLastWhile((x) => x >= 3, list);
  expect(result).toEqual([1, 2]);
});

test("with string", () => {
  const result = dropLastWhile((x) => x !== "b")(str);
  expect(result).toBe("foob");
});

test("with empty list", () => {
  expect(dropLastWhile(() => true, [])).toEqual([]);
  expect(dropLastWhile(() => false, [])).toEqual([]);
});

const possiblePredicates = [
  (x) => x > 2,
  (x) => x < 2,
  (x) => x < -2,
  (x) => x > 10,
  "",
  [],
  [1],
];

const possibleIterables = [
  list,
  [{}, "1", 2],
  str,
  `${str}${str}`,
  /foo/g,
  Promise.resolve("foo"),
  2,
];

describe("brute force", () => {
  compareCombinations({
    fn: dropLastWhile,
    fnRamda: dropLastWhileRamda,
    firstInput: possiblePredicates,
    secondInput: possibleIterables,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 12,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 21,
          "SHOULD_THROW": 0,
        }
      `);
    },
  });
});
