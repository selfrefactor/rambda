Future text 

```
6.0.0

- Breaking change - `R.map`/`R.filter`/`R.reject`/`R.forEach`/`R.partition` doesn't pass index as second argument to the predicate, when looping over arrays. The old behaviour of *map*, *filter* and *forEach* can be found in Rambdax methods *R.mapIndexed*, *R.filterIndexed* and *R.forEachIndexed*(version `6.1.0`).
```

Methods to compatability test:

- or
- and
- once

Methods to add:  

- props
- zipWith
- splitAt
- splitWhen
- takeLastWhile
- dropLastWhile
- addIndex
- dropRepeats
- dropRepeatsWith
- dropWhile
- takeWhile
- uniqBy
- propSatisfies
- pickBy
- pathSatisfies