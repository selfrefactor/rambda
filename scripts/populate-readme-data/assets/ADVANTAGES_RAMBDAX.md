### Dot notation for `R.path`, `R.paths`, `R.assocPath` and `R.lensPath`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

### Comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })
// No space allowed between properties
```

### Extendable with Ramda community projects

`Rambdax` implements some methods from `Ramda` community projects, such as `R.lensSatisfies`, `R.lensEq` and `R.viewOr`.

### Support

Most of the valid issues are fixed within 2-3 days.

Closing the issue is usually accompanied by publishing a new patch version of `Rambdax` to NPM.
