import { getIntro } from './get-intro'

test('happy', async () => {
  expect(await getIntro()).toMatchSnapshot()
})
