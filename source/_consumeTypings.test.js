import { resolve } from 'path'

import { execCommand } from '../files/execCommand.js'

jest.setTimeout(3 * 60 * 1000)

const DIR = resolve(__dirname, '../../')

test('typings can be imported', async () => {
  await execCommand('rm -rf rambda-scripts-clone', DIR)
  await execCommand('yarn build:main')

  expect(await execCommand('yarn consume-typings')).toBeTrue()
})
