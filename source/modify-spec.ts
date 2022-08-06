import { modify, add } from 'rambda'
const person = { name: 'James', age: 20, pets: ['dog', 'cat'] };

describe('R.modify', () => {
  it('happy', () => {
    const {age} = modify('age', add(1), person);
    const {age: ageAsString} = modify('age', String, person);
    
    age // $ExpectType number
    ageAsString // $ExpectType number
  })
  it('curried', () => {
    const {age} = modify('age', add(1))(person);
    
    age // $ExpectType number
  })
})
