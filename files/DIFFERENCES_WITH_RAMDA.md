# Differences between Rambda and Ramda

Up until version `9.4.2`, the aim of Rambda was to match as much as possible the Ramda API.
From version `10.0.0` onwards, Rambda will start to diverge from Ramda in order to address some of the issues that Ramda has.

## Ramda issues

- Typescript support - this is the main reason for the divergence. Most of design decisions in Rambda are made with Typescript in mind.

- Methods that imply side-effect, which is not FP oriented, e.g. `R.forEach`.

- Methods that are too complex to remember and also are too hard to build simple readable TypeScript definitions, e.g. `R.evolve`.

- Naming of methods that doesn't match developer's expectation, such as `R.chain`, which should be called `flatMap`.

- Naming of methods is sometimes too generic to be remembered such as `R.update`, `R.modify`, `R.where`.

## The goals of Rambda are

- Build a library that can be useful for TypeScript developers in the context of `R.piped` chain.

- Methods that are simply to remember only by its name. Complex logic shouldn't be part of utility library, but part of your codebase.

- Keep only methods which are both useful and which behaviour is obvious from its name. For example, `R.innerJoin` is kept, but `R.identical`,`R.move` is removed. Methods such as `R.toLower`, `R.length` provide little value. Such method are omitted from Rambda on purpose.

## Differences

- `R.piped` is the recommended method for TypeScript chaining.

- All methods that expect more than 1 input, will have to be called with `R.methodName(input1)(input2)` or `R.methodName(input1, input2)(input3)`. This is to make TypeScript definitions easier to maintain.

- Path inputs in `R.path` and related methods doesn't support array as input. They are still supported in Javascript context.

## Ramda methods that are not part of Rambda

- collectBy
- composeK

## Rambda methods that are not part of Ramda

- piped

## Renamed methods

- `R.chain` is renamed to `R.flatMap`
- `R.comparator` is renamed to `R.sortingFn`