import {modifyPath} from './modifyPath'

test('happy', () => {
  const result = modifyPath('a.b.c', x=> x+1, {a:{b: {c:1}}})
  console.log(result)
})
