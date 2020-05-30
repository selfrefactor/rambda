import {Paths as OPaths} from '../Object/Paths'
import {ObjectOf} from './ObjectOf'
import {List} from './List'

/**
Get all the possible paths of **`L`**
(⚠️ this won't work with circular-refs)
@param L to be inspected
@returns **`string[]`**
@example
```ts
```
*/
export type Paths<L extends List> =
    OPaths<ObjectOf<L>>
