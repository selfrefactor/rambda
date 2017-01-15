[![Build Status](https://travis-ci.org/selfrefactor/ils.svg?branch=master)](https://travis-ci.org/selfrefactor/rambda)
[![Codecov](https://img.shields.io/codecov/c/github/selfrefactor/ils.svg)](https://codecov.io/gh/selfrefactor/rambda)

# Rambda

Partial copy of *Ramda* using *Ramda.compose* and plain Javascript functions.

## Argumentation
I admire *Ramda* but most of the time I use only small part of what it offers.

But even when I create custom **Ramda** build, I still am not completely happy with the size.

## Example use
```
const R = require("rambda")
const result = R.compose(
  R.flatten,
  R.filter(val => val>2),
  R.flatten,
)([ [1], [2], [3], 4])
console.log(result) // => [3,4]
```

## Differences between Rambda and Ramda

Rambda's method are not compatible with **Ramda.__**.

In some cases **Ramda.__** can be replaced by **Ramda.flip**. **Rambda** is tested for compatability with **Ramda.flip**.

Also Rambda's **flatten** works only for the first 3 levels of nesting.

## Methods

#### compose
  Just passing Ramda's compose method

#### add

#### adjust

#### any

#### append

#### contains

#### drop

#### dropLast

#### filter

#### flatten

#### head

#### init

#### join

#### last

#### map

#### prepend

#### range

#### split

#### subtract

#### tail
#### uniq
#### update
