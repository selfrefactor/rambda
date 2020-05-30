import {Tail} from './Tail'
import {Length} from './Length'
import {List} from './List'

/**
Get the last entry of **`L`**
@param L to extract from
@returns **`any`**
@example
```ts
```
*/
export type Last<L extends List> =
    L[Length<Tail<L>>]
