import { benchmarkInfo } from './benchmark-info'

test('happy', async () => {
  expect(await benchmarkInfo()).toMatchSnapshot()
})
