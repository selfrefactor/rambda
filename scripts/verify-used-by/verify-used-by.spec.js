import {ms} from 'string-fn'
import { verifyUsedBy } from './verify-used-by.js'
jest.setTimeout(ms('30 seconds'))

test('happy', async () => {
  await expect(verifyUsedBy()).resolves.toBeUndefined()
})
