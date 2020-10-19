import { ms } from 'string-fn'

import { dynamicTsToolbelt } from './dynamic-ts-toolbelt'
jest.setTimeout(ms('2 minutes'))

test('happy', async () => {
  await dynamicTsToolbelt()
})

// Passing `commitHash` is currently not required
// Still, there are unused variables that brake `dtslint` tests
