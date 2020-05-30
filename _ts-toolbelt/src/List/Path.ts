import {Path as OPath} from '../Object/Path'
import {Key} from '../Any/Key'
import {List} from './List'

/**
Get in **`L`** the type of nested properties
@param L to be inspected
@param Path to be followed
@returns **`any`**
@example
```ts
```
*/
export type Path<L extends List, Path extends List<Key>> =
    OPath<L, Path>
