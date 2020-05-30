import { extractName } from './extract-name'
import { extractRawInfo } from './extract-raw-info'

test('happy', () => {
  const firstName = extractName(extractRawInfo()[ 0 ])
  expect(firstName).toEqual('add')
})
