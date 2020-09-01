## Differences between Rambda and Ramda

- Rambda's **type** detects async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handles *NaN* input, in which case it returns `NaN`.

- Rambda's **path** and **paths** accept dot notation - `'x.y' same as ['x','y']`

- Rambda's **pick** and **omit** accept comma notation - `'x,y' same as ['x','y']`

- Rambda's **forEach** can iterate over objects not only arrays.

- Rambda's **findIndex** , **findLastIndex** are passing index as second argument to the predicate function.

- Rambda's **filter** returns empty array with bad input(`null` or `undefined`), while Ramda throws.

- Ramda's **includes** will throw an error if input is neither `string` nor `array`, while **Rambda** version will return `false`.

- Ramda's **clamp** work with strings, while Rambda's method work only with numbers.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)