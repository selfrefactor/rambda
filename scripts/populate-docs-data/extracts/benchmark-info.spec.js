import { benchmarkInfo } from './benchmark-info.js'

test('happy', async () => {
  expect(await benchmarkInfo()).toMatchSnapshot()
})
