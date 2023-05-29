# Explanation of scripts
![Visualization of the codebase](./diagram.svg)

## benchmark

yarn build:step && METHOD=flatten yarn benchmark

> Require build command first, i.e. `yarn build`

## publish

> Require release build command first, i.e. `yarn out`

It streamlines the process of publishing

## d

> Expects `run-fn` to be installed

It lints and commits. Useful for faster deploy.

## github

It makes a Github release. It expects user to be logged with Github.

> Part of `rambda-scripts/README.md`'s `## Release steps` section

## run specific Rambda method agains Ramda test

yarn build:step && WITH_INITIAL_STEP=ON METHOD=modify yarn run:ramda:test

build output and run ramda test agains rambda method
