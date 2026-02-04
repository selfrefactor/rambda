import { pipe, pluck } from 'rambda';

it("R.pluck", () => {
  const input = [
    { a: 1, b: "foo" },
    { a: 2, b: "bar" },
  ];
  const result = pipe(input, pluck("b"));
  result; // $ExpectType string[]
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
  sentences; // $ExpectType string[]
});
