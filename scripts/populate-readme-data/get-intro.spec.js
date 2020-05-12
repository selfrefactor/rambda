import { getIntro } from './get-intro.js'

test('happy', async () => {
  expect(await getIntro()).toMatchSnapshot()
})
