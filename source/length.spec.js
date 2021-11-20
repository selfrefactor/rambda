import { length } from "./length";
import { length as lengthRamda } from "ramda";
import { compareCombinations } from "./_internals/testUtils";

test("happy", () => {
  expect(length("foo")).toEqual(3);
  expect(length([1, 2, 3])).toEqual(3);
  expect(length([])).toEqual(0);
});

test("with empty string", () => {
  expect(length("")).toEqual(0);
});

test("with bad input returns NaN", () => {
  expect(length(0)).toBeNaN();
  expect(lengthRamda(0)).toBeNaN();
  expect(length({})).toBeNaN();
  expect(length(null)).toBeNaN();
  expect(length(undefined)).toBeNaN();
});

const possibleInputs = [
  NaN,
  [/foo/],
  /foo/,
  {},
  null,
  undefined,
  0,
  Promise.resolve(1),
];

describe("brute force", () => {
  compareCombinations({
    fn: length,
    fnRamda: lengthRamda,
    firstInput: possibleInputs,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 8,
        }
      `);
    },
  });
});
