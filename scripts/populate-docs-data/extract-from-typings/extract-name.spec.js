import { extractName } from './extract-name.js'
import { extractRawInfo } from './extract-raw-info.js'

test('happy', () => {
  const firstName = extractName(extractRawInfo()[ 0 ])
  expect(firstName).toEqual('add')
})
