import { assoc } from './assoc'
import { lens } from './lens'
import { prop } from './prop'
import { view } from './view'

const alice = {
  name    : 'Alice Jones',
  address : [ '22 Walnut St', 'San Francisco', 'CA' ],
  pets    : {
    dog : 'joker',
    cat : 'batman',
  },
}

const nameLens = lens(prop('name'), assoc('name'))

test('happy', () => {
  expect(view(nameLens, alice)).toEqual('Alice Jones')
})