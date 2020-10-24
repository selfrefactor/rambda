 R.type(Symbol()) => 'Symbol'

Use release to test remove of extension in `main` prop as string-fn had issues

Can R.switchem throw error in `.default` case.

Add R.mapToList which takes object and returns a list

Fix `this` issue explained in `rambda-docs`

Add explanation to missing Ramda methods

Improve R.produce typings

R.equals support for 'Function' as it makes sense in deep unit testing.
---

Fix `If you need more Ramda methods in Rambda, you may either submit a PR or check the extended version of Rambda - Rambdax. In case of the former, you may want to consult with Rambda contribution guidelines.` in Rambdax

---

Methods to add:  

- uniqBy
- propSatisfies
- pickBy
- pathSatisfies
- gte

https://github.com/smartprocure/futil-js#differentlast
https://github.com/smartprocure/futil-js#whentruthy
findApply
compactMap
compactJoin
flattenObject
simpleDiff
highlight
on
off
includeLens?
---

R.xnor

assert.isTrue(RA.xnor(true, true));
assert.isFalse(RA.xnor(false, true));
assert.isFalse(RA.xnor(true, false));
assert.isTrue(RA.xnor(false, false));
