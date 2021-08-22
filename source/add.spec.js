import { add } from "./add";
import { add as addRamda } from "ramda";
import { compareCombinations } from "./_internals/testUtils";

test("with number", () => {
  expect(add(2, 3)).toEqual(5);
  expect(add(7)(10)).toEqual(17);
});

test("string is bad input", () => {
  expect(add("foo", "bar")).toBeNaN();
});

test("ramda specs", () => {
  expect(add("1", "2")).toEqual(3);
  expect(add(1, "2")).toEqual(3);
  expect(add(true, false)).toEqual(1);
  expect(add(null, null)).toEqual(0);
  expect(add(undefined, undefined)).toEqual(NaN);
  expect(add(new Date(1), new Date(2))).toEqual(3);
});

const possibleInputs = [/foo/, "foo", true, 3, NaN, 4, [], Promise.resolve(1)];

describe("brute force", () => {
  compareCombinations({
    fn: add,
    fnRamda: addRamda,
    firstInput: possibleInputs,
    secondInput: possibleInputs,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 64,
        }
      `);
    },
  });
});
