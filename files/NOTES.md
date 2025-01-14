===
===
export function append<T>(xToAppend: T): (iterable: T[]) => T[]; is added for consistency and as a fallback just in case as there is no spec to cover this case
===
// cannot be tested with `let list = []` because of implicit any
===
===
    "moduleResolution":"node",

import {createPipe, filter as filterRemeda} from 'remeda'

test('remeda test', () => {
  interface MyTestType{value:string}
  const list: MyTestType[] = [{ value: 'aaaa' }, { value: 'bbb' }]
  
  let result = createPipe<MyTestType[], MyTestType[]>(filterRemeda((x) => x.value.includes('a')))(list)
  result // $ExpectType MyTestType[]
})

===
still issue with order of rambda.js
===
https://typehero.dev/explore/medium - ref
===
https://emanuelef.github.io/daily-stars-explorer/#/selfrefactor/rambda