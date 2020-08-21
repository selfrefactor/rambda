import { updateObject } from './updateObject'

const obj = {
  a   : { b : 1 },
  foo : { bar : 10 },
}
const rules = [
  [ 'a.b', 2 ],
  [ 'foo.bar', 20 ],
  [ 'q.z', 300 ],
]
const expected = {
  a   : { b : 2 },
  foo : { bar : 20 },
  q   : { z : 300 },
}

test('happy', () => {
  const result = updateObject(rules, obj)
  console.log(result)
  // expect(result).toEqual(expected)
})
