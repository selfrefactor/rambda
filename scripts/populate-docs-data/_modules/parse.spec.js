import { getTypings } from './getTypings'
import { parse } from './parse.js'

test('happy', () => {
  parse(getTypings())
})
