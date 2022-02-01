import { countBy } from './countBy'

test('happy', () => {
  const list = ['a','A','b','B', 'c', 'C']
  const result = countBy(x => x.toLowerCase(), list)
  console.log(result)
})
