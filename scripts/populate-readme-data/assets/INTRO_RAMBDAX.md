# Rambdax

Extended version of Rambda(utility library) - [Documentation](https://selfrefactor.github.io/rambdax/#/)

`Rambda` is smaller and faster  alternative to the popular functional programming library **Ramda**. - [Documentation](https://selfrefactor.github.io/rambda/#/)

[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
[![dependencies Status](https://david-dm.org/selfrefactor/rambdax/status.svg)](https://david-dm.org/selfrefactor/rambdax)
![Library size](https://img.shields.io/bundlephobia/minzip/rambdax)

## ➤ Differences between Rambda and Rambdax

Rambdax passthrough all [Rambda](https://github.com/selfrefactor/rambda) methods and introduce some new functions.

The idea of **Rambdax** is to extend **Rambda** without worring for **Ramda** compatibility.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-differences-between-rambda-and-rambdax)

## ➤ Example use

```javascript
import { composeAsync, filter, delay, mapAsync } from 'rambdax'

const result = await composeAsync(
  mapAsync(async x => {
    await delay(100)
    return x + 1
  }),
  filter(x => x > 1)
)([1, 2, 3])
// => [3, 4]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20await%20R.composeAsync(%0A%20%20R.mapAsync(async%20x%20%3D%3E%20%7B%0A%20%20%20%20await%20R.delay(100)%0A%20%20%20%20return%20x%20%2B%201%0A%20%20%7D)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)(%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Rambda's REPL</a>

* [Install](#install)
* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Changelog](#changelog)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## ➤ Rambdax's advantages

{{advantages}}

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdaxs-advantages)