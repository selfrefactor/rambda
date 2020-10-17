import { ms } from 'string-fn'

import { dynamicTsToolbelt } from './dynamic-ts-toolbelt'
jest.setTimeout(ms('2 minutes'))


test('happy', async () => {
  await dynamicTsToolbelt()
})

// This is currently not required
// Still, there are unused variables that brake `dtslint` tests
// Because of https://github.com/selfrefactor/rambda/issues/511
// const commitHash = '3fdfe4d6a87a6ae19899adea9f68c1bce49d940b'
