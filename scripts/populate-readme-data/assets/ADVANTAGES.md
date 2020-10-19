### Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

Still, you need to be aware that functional programming features in `Typescript` are in development, which means that using **R.compose/R.pipe** can be problematic.

### Smaller size

The size of a library affects not only the build bundle size but also the dev bundle size and build time. This is important advantage, expecially for big projects.

### Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda** - proven in the following [repo](https://github.com/selfrefactor/rambda-tree-shaking).

The repo holds two `Angular9` applications: one with small example code of *Ramda* and the other - same code but with *Rambda* as import library.

The test shows that **Rambda** bundle size is **{{rambdaTreeShakingInfo}} MB** less than its **Ramda** counterpart.

There is also [Webpack/Rollup/Parcel/Esbuild tree-shaking example including several libraries](https://github.com/mischnic/tree-shaking-example) including `Ramda`, `Rambda` and `Rambdax`. 

> actually tree-shaking is the initial reason for creation of `Rambda`

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

### Speed

**Rambda** is generally more performant than `Ramda` as the [benchmarks](#benchmarks) can prove that.

### Support

Most of the valid issues are fixed within 2-3 days.

Closing the issue is usually accompanied by publishing a new patch version of `Rambda` to NPM.
