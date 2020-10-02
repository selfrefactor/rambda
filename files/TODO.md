R.produce becomes produceAsync and R.produce is for synchronous functions

Add explanation to missing Ramda methods

Improve R.produce typings
---

Fix `If you need more Ramda methods in Rambda, you may either submit a PR or check the extended version of Rambda - Rambdax. In case of the former, you may want to consult with Rambda contribution guidelines.` in Rambdax

---

Methods to add:  

- evolve
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


---

R.xnor

assert.isTrue(RA.xnor(true, true));
assert.isFalse(RA.xnor(false, true));
assert.isFalse(RA.xnor(true, false));
assert.isTrue(RA.xnor(false, false));
