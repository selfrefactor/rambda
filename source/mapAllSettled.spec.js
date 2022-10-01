import { mapAllSettled } from "./mapAllSettled";
import { delay } from "./delay";
import { pipeAsync } from "./pipeAsync";
import { join } from "./join";
import { map } from "./map";

const fn = async (x, i) => {
  await delay(100);
  if (i % 2) throw new Error(`foo-${i}`);

  return x + 1;
};

test("happy", async () => {
  expect(await mapAllSettled(fn, [1, 2, 3, 4])).toMatchInlineSnapshot(`
    Array [
      Object {
        "status": "fulfilled",
        "value": 2,
      },
      Object {
        "reason": [Error: foo-1],
        "status": "rejected",
      },
      Object {
        "status": "fulfilled",
        "value": 4,
      },
      Object {
        "reason": [Error: foo-3],
        "status": "rejected",
      },
    ]
  `);
});

test('inside pipe', async () => {
  const result = await pipeAsync(
    mapAllSettled(fn),
    map(({status}) => status),
    join('-')
  )([1,2,3])
  expect(result).toBe('fulfilled-rejected-fulfilled')
})
