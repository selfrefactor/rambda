import { eqProps as eqPropsRamda } from "ramda";

import { compareCombinations } from "./_internals/testUtils";
import { eqProps } from "./eqProps";

const obj1 = {
  a: 1,
  b: 2,
};
const obj2 = {
  a: 1,
  b: 3,
};

test("props are equal", () => {
  const result = eqProps("a", obj1, obj2);
  expect(result).toBeTrue();
});

test("props are not equal", () => {
  const result = eqProps("b", obj1, obj2);
  expect(result).toBeFalse();
});

test("prop does not exist ", () => {
  const result = eqProps("c", obj1, obj2);
  expect(result).toBeTrue();
});

test("can handle null or undefined object", function () {
  expect(eqProps("value", { value: 0 }, null)).toEqual(false);
  expect(eqProps("value", { value: 0 }, undefined)).toEqual(false);
  expect(eqProps("value", null, { value: 0 })).toEqual(false);
  expect(eqProps("value", undefined, { value: 0 })).toEqual(false);
  expect(eqProps("value", undefined, { value: undefined })).toEqual(true);
  expect(eqProps("value", null, { value: undefined })).toEqual(true);
  expect(eqProps("value", { value: undefined }, undefined)).toEqual(true);
  expect(eqProps("value", { value: undefined }, null)).toEqual(true);
  expect(eqProps("value", {}, null)).toEqual(true);
  expect(eqProps("value", {}, undefined)).toEqual(true);
  expect(eqProps("value", null, {})).toEqual(true);
  expect(eqProps("value", undefined, {})).toEqual(true);
});

const possibleProps = ["a", "a.b", null, false, 0, 1, {}, []];

const possibleObjects = [
  { a: 1 },
  {
    a: 1,
    b: 2,
  },
  {},
  [],
  null,
  {
    a: { b: 1 },
    c: 2,
  },
  {
    a: { b: 1 },
    c: 3,
  },
  { a: { b: 2 } },
];

describe("brute force", () => {
  let totalTestsCounter = 0;

  compareCombinations({
    firstInput: possibleProps,
    setCounter: () => totalTestsCounter++,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 120,
          "TOTAL_TESTS": 512,
        }
      `);
    },
    secondInput: possibleObjects,
    thirdInput: possibleObjects,
    fn: eqProps,
    fnRamda: eqPropsRamda,
  });
});
