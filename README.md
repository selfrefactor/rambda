[![Build Status](https://travis-ci.org/selfrefactor/ils.svg?branch=master)](https://travis-ci.org/selfrefactor/rambda)
[![Codecov](https://img.shields.io/codecov/c/github/selfrefactor/ils.svg)](https://codecov.io/gh/selfrefactor/rambda)

# Rambda

Partial copy of *Ramda* using only *R.compose* and plain Javascript functions.

## Argumentation
The main issue with *Ramda* is its size. Custom build and minification solve the issue only partially.

## What is included?

#### compose
  Just passing minified version of Ramda's compose method

#### flatten
  Flattens nested arrays. Work only for the first 3 levels of nesting

#### head

Same implenentation as *Ramda's* ***head*** method, except it is not auto-curried.

This description applies also for the following **Rambda** methods:

#### init

#### tail

#### last

#### drop

#### dropLast
