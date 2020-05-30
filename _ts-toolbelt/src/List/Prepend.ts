import {List} from './List'

/**
Add an element **`A`** at the beginning of **`L`**
@param L to append to
@param A to be added to
@returns [[List]]
@example
```ts
```
*/
export type Prepend<L extends List, A extends any> =
    ((head: A, ...args: L) => any) extends ((...args: infer U) => any)
    ? U
    : L
