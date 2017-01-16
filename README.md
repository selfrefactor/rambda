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

<a href="http://ramdajs.com/docs/#add" target="_blank">link to Ramda's docs for add method</a>

#### adjust

<a href="http://ramdajs.com/docs/#adjust" target="_blank">link to Ramda's docs for adjust method</a>

#### any

<a href="http://ramdajs.com/docs/#any" target="_blank">link to Ramda's docs for any method</a>

#### append

<a href="http://ramdajs.com/docs/#append" target="_blank">link to Ramda's docs for append method</a>

#### contains

<a href="http://ramdajs.com/docs/#contains" target="_blank">link to Ramda's docs for contains method</a>

#### drop

<a href="http://ramdajs.com/docs/#drop" target="_blank">link to Ramda's docs for drop method</a>

#### dropLast

<a href="http://ramdajs.com/docs/#dropLast" target="_blank">link to Ramda's docs for dropLast method</a>

#### filter

<a href="http://ramdajs.com/docs/#filter" target="_blank">link to Ramda's docs for filter method</a>

#### flatten

<a href="http://ramdajs.com/docs/#flatten" target="_blank">link to Ramda's docs for flatten method</a>

#### head

<a href="http://ramdajs.com/docs/#head" target="_blank">link to Ramda's docs for head method</a>

#### init

<a href="http://ramdajs.com/docs/#init" target="_blank">link to Ramda's docs for init method</a>

#### join

<a href="http://ramdajs.com/docs/#join" target="_blank">link to Ramda's docs for join method</a>

#### last

<a href="http://ramdajs.com/docs/#last" target="_blank">link to Ramda's docs for last method</a>

#### length

<a href="http://ramdajs.com/docs/#length" target="_blank">link to Ramda's docs for length method</a>

#### map

<a href="http://ramdajs.com/docs/#map" target="_blank">link to Ramda's docs for map method</a>

#### omit

<a href="http://ramdajs.com/docs/#omit" target="_blank">link to Ramda's docs for omit method</a>

#### path

<a href="http://ramdajs.com/docs/#path" target="_blank">link to Ramda's docs for path method</a>

#### prepend

<a href="http://ramdajs.com/docs/#prepend" target="_blank">link to Ramda's docs for prepend method</a>

#### pick

<a href="http://ramdajs.com/docs/#pick" target="_blank">link to Ramda's docs for pick method</a>

#### prop

<a href="http://ramdajs.com/docs/#prop" target="_blank">link to Ramda's docs for prop method</a>

#### propEq

<a href="http://ramdajs.com/docs/#propEq" target="_blank">link to Ramda's docs for propEq method</a>

#### range

<a href="http://ramdajs.com/docs/#range" target="_blank">link to Ramda's docs for range method</a>

#### repeat

<a href="http://ramdajs.com/docs/#repeat" target="_blank">link to Ramda's docs for repeat method</a>

#### replace

<a href="http://ramdajs.com/docs/#replace" target="_blank">link to Ramda's docs for replace method</a>

#### sort

<a href="http://ramdajs.com/docs/#sort" target="_blank">link to Ramda's docs for sort method</a>

#### sortBy

<a href="http://ramdajs.com/docs/#sortBy" target="_blank">link to Ramda's docs for sortBy method</a>

#### split

<a href="http://ramdajs.com/docs/#split" target="_blank">link to Ramda's docs for split method</a>

#### splitEvery

<a href="http://ramdajs.com/docs/#splitEvery" target="_blank">link to Ramda's docs for splitEvery method</a>

#### subtract

<a href="http://ramdajs.com/docs/#subtract" target="_blank">link to Ramda's docs for subtract method</a>

#### tail

<a href="http://ramdajs.com/docs/#tail" target="_blank">link to Ramda's docs for tail method</a>

#### take

<a href="http://ramdajs.com/docs/#take" target="_blank">link to Ramda's docs for take method</a>

#### takeLast

<a href="http://ramdajs.com/docs/#takeLast" target="_blank">link to Ramda's docs for takeLast method</a>

#### test

<a href="http://ramdajs.com/docs/#test" target="_blank">link to Ramda's docs for test method</a>

#### toLower

<a href="http://ramdajs.com/docs/#toLower" target="_blank">link to Ramda's docs for toLower method</a>

#### toUpper

<a href="http://ramdajs.com/docs/#toUpper" target="_blank">link to Ramda's docs for toUpper method</a>

#### type

<a href="http://ramdajs.com/docs/#type" target="_blank">link to Ramda's docs for type method</a>

#### values

<a href="http://ramdajs.com/docs/#values" target="_blank">link to Ramda's docs for values method</a>

#### uniq

<a href="http://ramdajs.com/docs/#uniq" target="_blank">link to Ramda's docs for uniq method</a>

#### update

<a href="http://ramdajs.com/docs/#update" target="_blank">link to Ramda's docs for update method</a>
