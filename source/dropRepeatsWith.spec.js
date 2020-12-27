import { dropRepeatsWith as dropRepeatsWithRamda, eqProps } from "ramda";
import { dropRepeatsWith } from "./dropRepeatsWith";
import { path } from "./path";
import { compareCombinations } from "./_internals/testUtils";


const eqI = eqProps("i");

test("happy", () => {
  const list = [{ i: 1 }, { i: 2 }, { i: 2 }, { i: 3 }];
  const expected = [{ i: 1 }, { i: 2 }, { i: 3 }];
  const result = dropRepeatsWith(eqI, list);
  expect(result).toEqual(expected);
});

test("keeps elements from the left predicate input", () => {
  const list = [
    {
      i: 1,
      n: 1,
    },
    {
      i: 1,
      n: 2,
    },
    {
      i: 1,
      n: 3,
    },
    {
      i: 4,
      n: 1,
    },
    {
      i: 4,
      n: 2,
    },
  ];
  const expected = [
    {
      i: 1,
      n: 1,
    },
    {
      i: 4,
      n: 1,
    },
  ];
  const result = dropRepeatsWith(eqI)(list);
  expect(result).toEqual(expected);
});

const possiblePredicates = [
  null,
  undefined,
  (x) => x + 1,
  (x) => true,
  (x) => false,
  (x) => "",
  path(["a", "b"]),
];
const possibleLists = [
  null,
  undefined,
  [],
  [1],
  [{ a: { b: 1 } }, { a: { b: 1 } }],
  [/foo/g, /foo/g],
];

describe("brute force", () => {
  compareCombinations({
    firstInput: possiblePredicates,
    secondInput: possibleLists,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 4,
          "ERRORS_TYPE_MISMATCH": 14,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
        }
      `);
    },
    fn: dropRepeatsWith,
    fnRamda: dropRepeatsWithRamda,
  });
});
