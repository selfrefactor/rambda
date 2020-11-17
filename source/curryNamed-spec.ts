import { namedCurry } from "rambda";

interface NamedArguments {
  a?: number;
  b?: number;
  c?: number;
  d?: number;
}

const source = ({ a, b, c, d }: NamedArguments): any => {
  void d;

  return typeof a === "number" && typeof b === "number" && typeof c === "number"
    ? a * b * c
    : void 0;
};

describe("R.namedCurry", () => {
  it("happy", () => {
    const partiallyApplied = namedCurry(source, ["a", "b", "c", "d"]);

    const result1 = partiallyApplied({ a: 1 })({ b: 2 })({ c: 3 });
    const result2 = partiallyApplied({ a: 1, b: 2 })({ c: 3 });
    const result3 = partiallyApplied({ a: 1 })({ b: 2, c: 3 });
    const result4 = partiallyApplied({ a: 1, b: 2, c: 3 });

    result1; // $ExpectType number
    result2; // $ExpectType number
    result3; // $ExpectType number
    result4; // $ExpectType number
  });
  // it("curried", () => {
  //   const result = namedCurry();

  //   result; // $ExpectType number
  // });
});
