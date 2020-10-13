import { assoc } from './assoc'
import { lens } from './lens'
import { prop } from './prop'
import { view } from './view'

const testObject = { foo : 'Led Zeppelin' }
const assocLens = lens(prop('foo'), assoc('foo'))

test('happy', () => {
  expect(view(assocLens, testObject)).toEqual('Led Zeppelin')
})
