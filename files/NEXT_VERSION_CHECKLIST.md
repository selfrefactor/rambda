# Differences between Rambda and Ramda

Up until version `9.4.2`, the aim of Rambda was to match as much as possible the Ramda API.
From version `10.0.0` onwards, Rambda will start to diverge from Ramda in order to address some of the issues that Ramda has.

## Ramda issues

- Typescript support - this is the main reason for the divergence. Most of design decisions in Rambda are made with Typescript in mind.

- Methods that imply side-effect, which is not FP oriented, e.g. `R.forEach`.

- Naming of methods that doesn't match developer's expectation, such as `R.chain`, which should be called `flatMap`.

- Naming of methods is sometimes too generic to be remembered such as `R.update`, `R.modify`, `R.where`.

- Methods that are already present in standard JavaScript, such as `R.toLower`, `R.length`.

- `R.compose` doesn't have the best possible TypeScript support.


===
https://jsr.io/@rambda/rambda
===
ABOVE IS DONE
===
npm version premajor --preid alpha
npm version prerelease --preid beta

    npm version premajor changes 23.1.6 to 24.0.0-0

From that point on, you can increase the prerelease version number using the command npm version prerelease.

    npm version prerelease changes 24.0.0-alpha.0 to 24.0.0-alpha.1
    npm version prerelease changes 23.2.0-alpha.0 to 23.2.0-alpha.1

Then, when you’re ready for the actual release, you use the regular npm version command:

    npm version major changes 24.0.0-alpha.1 to 24.0.0
		===

initial part README.md is here
===
Link to old version of README.md for benchmarking reference -
===
ABOVE IS IN PROGRESS
===
ascend/descend 

move glue to string-fn


utils such as todecimal, mapParallelAsync can be moved to Roza library

https://github.com/toss/es-toolkit - another FP library

