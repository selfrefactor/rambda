import { pipe, pluck } from 'rambda';
import { expectTypeOf, it } from 'vitest'

it("R.pluck", () => {
  const input = [
    { a: 1, b: "foo" },
    { a: 2, b: "bar" },
  ];
  const result = pipe(input, pluck("b"));
  expectTypeOf(result).toEqualTypeOf<string[]>()
});

it("R.pluck without R.pipe", () => {
  interface Content {
    text: string;
  }
  const content: Content[] = [
    {
      text: "foo",
    },
  ];
  const sentences = pluck("text")(content);
  expectTypeOf(sentences).toEqualTypeOf<string[]>()
});
