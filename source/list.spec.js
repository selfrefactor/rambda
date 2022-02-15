import { List } from './list'

test('happy', () => {
  const list = new List(1,2,3,4,5,6,7,8,9)
  console.log(list)
  // list.push(2)
  const chunk1 = list.slice("0:3")
  console.log(`chunk1`, chunk1)
})
