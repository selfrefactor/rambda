import { lint } from './lint.js'
import { ms } from 'string-fn'
jest.setTimeout(ms('20 minutes'))

test('happy', async () => {
  await lint()
})
