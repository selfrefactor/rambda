import {IterationOf} from '../Iteration/IterationOf'
import {Iteration} from '../Iteration/Iteration'
import {Prepend} from './Prepend'
import {Next} from '../Iteration/Next'
import {Length} from './Length'
import {Pos} from '../Iteration/Pos'
import {_Reverse} from './Reverse'
import {Cast} from '../Any/Cast'
import {List} from './List'
import {Naked} from './_Internal'
import {Extends} from '../Any/Extends'

/**
@hidden
*/
type __Zip<L extends List, L1 extends List, LN extends List = [], I extends Iteration = IterationOf<'0'>> = {
    0: __Zip<L, L1, Prepend<LN, [L[Pos<I>], L1[Pos<I>]]>, Next<I>>
    1: _Reverse<LN>
}[Extends<Pos<I>, Length<L>>]

/**
@hidden
*/
export type _Zip<L extends List, L1 extends List> =
    __Zip<Naked<L>, Naked<L1>> extends infer X
    ? Cast<X, List>
    : never

/**
Pair up the entries of **`L`** with **`L1`**
@param L to pair up
@param L1 to pair up with
@returns [[List]]
@example
```ts
```
*/
export type Zip<L extends List, L1 extends List> =
    L extends unknown
    ? L1 extends unknown
      ? _Zip<L, L1>
      : never
    : never
