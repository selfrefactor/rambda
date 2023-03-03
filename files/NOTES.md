    "moduleResolution":"node",

import {createPipe, filter as filterRemeda} from 'remeda'

test('remeda test', () => {
  interface MyTestType{value:string}
  const list: MyTestType[] = [{ value: 'aaaa' }, { value: 'bbb' }]
  
  let result = createPipe<MyTestType[], MyTestType[]>(filterRemeda((x) => x.value.includes('a')))(list)
  result // $ExpectType MyTestType[]
})

===
this is git diff output:

```

```

Copilot, please generate a commit message in the following format `feat|fix|docs|style|refactor|test|chore: <commit message>`:
===
still issue with order of rambda.js