import { ms } from 'string-fn'

import { lint } from './lint.js'
jest.setTimeout(ms('20 minutes'))

test('happy', async () => {
  await lint()
})
