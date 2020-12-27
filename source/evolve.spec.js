import { evolve as evolveRamda } from "ramda";

import { add } from "../rambda.js";
import { compareCombinations, compareToRamda } from "./_internals/testUtils";
import { evolve } from "./evolve";

test("happy", () => {
  const rules = {
    foo: add(1),
    nested: {
      bar: x => Object.keys(x).length,
    }
  };
  const input = {
    a: 1,
    foo: 2,
    nested: {
      bar: {z: 3},
    }
  };
  const result = evolve(rules, input);
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: {
      bar: 1,
    }
  });
});

test("nested rule is wrong", () => {
  const rules = {
    foo: add(1),
    nested: {
      bar: 10,
    }
  };
  const input = {
    a: 1,
    foo: 2,
    nested: {
      bar: {z: 3},
    }
  };
  const result = evolve(rules)(input);
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: {
      bar: {z: 3},
    }
  });
});

test("is recursive", () => {
  const rules = {
    nested: {
      second: add(-1),
      third: add(1),
    },
  };
  const object = {
    first: 1,
    nested: {
      second: 2,
      third: 3,
    },
  };
  const expected = {
    first: 1,
    nested: {
      second: 1,
      third: 4,
    },
  };
  const result = evolve(rules, object);
  expect(result).toEqual(expected);
});

test("ignores primitive values", () => {
  const rules = {
    n: 2,
    m: "foo",
  };
  const object = {
    n: 0,
    m: 1,
  };
  const expected = {
    n: 0,
    m: 1,
  };
  const result = evolve(rules, object);
  expect(result).toEqual(expected);
});

test("with array", () => {
  const rules = [add(1), add(-1)];
  const list = [100, 1400];
  const expected = [101, 1399];
  const result = evolve(rules, list);
  expect(result).toEqual(expected);
});

const rulesObject = { a: add(1) };
const rulesList = [add(1)];
const possibleIterables = [null, undefined, "", 42, [], [1], { a: 1 }];
const possibleRules = [...possibleIterables, rulesList, rulesObject];

describe("brute force", () => {
  compareCombinations({
    firstInput: possibleRules,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 4,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
        }
      `);
    },
    secondInput: possibleIterables,
    fn: evolve,
    fnRamda: evolveRamda,
  });
});
