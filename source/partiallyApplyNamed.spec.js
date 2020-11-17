import { partiallyApplyNamed } from "./partiallyApplyNamed";

test("happy", () => {
  const addFourNumbers = ({ a, b, c, d }) => a + b + c + d;
  const partiallyAppliedAddFourNumbers = partiallyApplyNamed(addFourNumbers, [
    "a",
    "b",
    "c",
    "d",
  ]);
  const f = partiallyAppliedAddFourNumbers({ c: 1, a: 2 });
  const g = f({ d: 3 });

  expect(g({ b: 4 })).toEqual(10);
});

test("when called with more arguments", () => {
  const add = partiallyApplyNamed(({ n, n2 }) => n + n2, ["n", "n2"]);

  expect(
    add({
      n2: 1,
      n: 2,
      n3: 3,
    })
  ).toEqual(3);
});

test("when called with zero arguments", () => {
  const sub = partiallyApplyNamed(({ a, b }) => a - b, ["a", "b"]);
  const s0 = sub();

  expect(s0({ a: 5, b: 2 })).toEqual(3);
});

test("when called via multiple partial application stages", () => {
  const join = partiallyApplyNamed(({ a, b, c, d }) => [a, b, c, d].join("-"), [
    "a",
    "b",
    "c",
    "d",
  ]);

  const stage1 = join({ a: "A" });
  const stage2 = stage1({ b: "B", c: "C" });

  expect(stage2({ d: "D" })).toEqual("A-B-C-D");
});
