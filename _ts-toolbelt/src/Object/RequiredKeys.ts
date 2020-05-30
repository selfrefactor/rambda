import {Key} from '../Any/Key'

/**
@hidden
*/
export type _RequiredKeys<O extends object> = {
    [K in keyof O]-?: {} extends Pick<O, K> ? never : K
}[keyof O]

/**
Get the keys of **`O`** that are required
@param O
@returns [[Key]]
@example
```ts
```
*/
export type RequiredKeys<O extends object> =
    (
        O extends unknown
        ? _RequiredKeys<O>
        : never
    ) & Key
