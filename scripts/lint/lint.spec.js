import { ms } from 'string-fn'

import { lint } from './lint'
jest.setTimeout(ms('20 minutes'))

test('happy', async () => {
  await lint()
})
