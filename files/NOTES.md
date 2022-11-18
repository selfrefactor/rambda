    "moduleResolution":"node",

import {createPipe, filter as filterRemeda} from 'remeda'

test('remeda test', () => {
  interface MyTestType{value:string}
  const list: MyTestType[] = [{ value: 'aaaa' }, { value: 'bbb' }]
  
  let result = createPipe<MyTestType[], MyTestType[]>(filterRemeda((x) => x.value.includes('a')))(list)
  result // $ExpectType MyTestType[]
})
