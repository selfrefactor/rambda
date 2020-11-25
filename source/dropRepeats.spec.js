import { dropRepeats as dropRepeatsRamda } from "ramda";

import { compareCombinations } from "./_internals/testUtils";
import { add } from "./add";
import { dropRepeats } from "./dropRepeats";

const list = [1, 2, 2, 2, 3, 4, 4, 5, 5, 3, 2, 2, { a: 1 }, { a: 1 }];
const listClean = [1, 2, 3, 4, 5, 3, 2, { a: 1 }];

test("happy", () => {
  const result = dropRepeats(list);
  expect(result).toEqual(listClean);
});

const possibleLists = [
  [add(1), async () => {}, [1], [1], [2], [2]],
  [add(1), add(1), add(2)],
  [],
  1,
  /foo/g,
  Promise.resolve(1),
];

describe("brute force", () => {
  compareCombinations({
    firstInput: possibleLists,
    callback: (errorsCounters) => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 1,
          "SHOULD_NOT_THROW": 3,
          "SHOULD_THROW": 0,
        }
      `);
    },
    fn: dropRepeats,
    fnRamda: dropRepeatsRamda,
  });
});
