#### adjust

> adjust(i: number, replaceFn: Function, arr: T[]): T[]

It replaces `i` index in `arr` with the result of `replaceFn(arr[i])`.

```
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```