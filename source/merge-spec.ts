import {merge} from 'rambda'

describe('merge', () => {
  const result = merge({ foo: 1 }, { bar: 2 }); 
  const curriedResult = merge({ foo: 1 })({ bar: 2 }); 
  
  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})
