import { intersperse } from './intersperse'

test('intersperse', () => {
  const list = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
  expect(intersperse({id: ''})(list)).toEqual([
    { id: 'a' },
    { id: '' },
    { id: 'b' },
    { id: '' },
    { id: 'c' },
  ])
  expect(intersperse('!')([])).toEqual([])
})

test('type test', () => {
  const result = intersperse('|')(['foo', 'bar'])
  expectTypeOf(result).toEqualTypeOf<string[]>()
  expect(result).toEqual(['foo', '|', 'bar'])
})
//  A) Errors in runtime test() bodies (same kind as intersperse) — 49 files                                      
                                                                                                               
//  ```                                                                                                           
//    anyPass(1)  assertType(2)  compact(1)  complement(1)  createObjectFromKeys(1)                               
//    dropWhile(1)  eqBy(5)  eqProps(1)  evolve(2)  filterMap(1)  groupBy(1)                                      
//    includes(1)  indexBy(1)  indexOf(4)  intersperse(1)  lastIndexOf(3)  map(1)                                 
//    mapAsync(2)  mapChain(1)  mapParallelAsync(4)  match(1)  maxBy(2)  minBy(3)                                 
//    modifyPath(4)  modifyProp(3)  objectIncludes(2)  omit(1)  path(8)                                           
//    pathSatisfies(4)  pick(1)  pluck(2)  propEq(4)  propOr(3)  propSatisfies(2)                                 
//    reduce(4)  sortBy(2)  sortByDescending(2)  sortByPath(3)  sortByPathDescending(3)                           
//    sortWith(16)  switcher(25)  takeLastWhile(1)  takeWhile(3)  tryCatch(6)                                     
//    type(4)  uniqWith(8)  unless(4)  when(2)  zipWith(2)                                                        
//  ```                                                                                                           
                                                                                                               
//  Dominant patterns: TS2345/TS2769 (overload/call mismatches — path, switcher, sortWith, reduce), TS18046 'x'   
//  is of type 'unknown' (propSatisfies, unless, takeWhile, uniqWith), TS7006 implicit any (switcher, tryCatch,   
//  when, uniqWith, zipWith). Note type.spec.ts(1,35) is partly an environment artifact (ramda lacks bundled      
//  types), but its other 3 errors (new Buffer.from, implicit any ms, unresolvable RambdaTypes) are genuine.      
                                                                                                               
//  B) expectTypeOf assertion failures — actual type ≠ asserted type — 8 files                                    
                                                                                                               
//  These are more serious: they mean the method's inferred types contradict what the test explicitly asserts.    
                                                                                                               
//  ```                                                                                                           
//    filter(1)  rejectObject(1)  sortByDescending(1)  sortByPathDescending(1)                                    
//    take(1)  takeLast(1)  takeLastWhile(1)  takeWhile(1)                                                        
//  ```                                                                                                           
                                                                                                               
//  e.g. take.spec.ts:24 asserts take(1)(['foo','bar','baz']) is string[] but the inferred type resolves to       
//  unknown.               